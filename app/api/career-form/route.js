import { mailOptions, transporter } from "@/emails/client";
import {
  parseFormData,
  replaceMergeTags,
  stripHTMLTags,
} from "@/emails/helpers";

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  // get formdata from req
  const formData = await request.formData();

  //parse it into object
  const data = parseFormData(formData);

  const htmlFilePath = path.join(process.cwd(), "emails", "career-form.html");

  let htmlContent = fs.readFileSync(
    htmlFilePath,
    "utf8",
    (err, htmlContent) => {
      if (err) {
        console.error("Error reading HTML file: ", err);
        return;
      }
    }
  );

  // replace merge tags with values
  htmlContent = replaceMergeTags(data, htmlContent);
  const plainTextContent = stripHTMLTags(htmlContent);

  try {
    // parse file into buffer
    const file = formData.get("file");
    const file_buffer = Buffer.from(await file.arrayBuffer());

    await transporter.sendMail({
      ...mailOptions,
      subject: `MYBRANDFIRST , ${data.title} vacancy`,
      text: plainTextContent,
      html: htmlContent,
      attachments: [
        {
          filename: file.name,
          content: file_buffer, // Assuming you have the file content in a Buffer
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
