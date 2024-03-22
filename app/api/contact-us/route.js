// Import necessary modules
import { mailOptions, transporter } from "@/emails/client";
import { replaceMergeTags, stripHTMLTags } from "@/emails/helpers";
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

// Define the POST function
export async function POST(request) {
    const data = await request.json();
    console.log(data);
    
    // Check if any required field is missing or empty
    if (!data || !data.fullName || !data.email || !data.mobile || !data.company ) {
        return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    const htmlFilePath = path.join(process.cwd(), 'emails', 'contact-form.html');
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `New Contact Form Inquiry`,
            text: plainTextContent,
            html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
