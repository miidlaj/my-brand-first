export const stripHTMLTags = (htmlString) => {
  // also replaces <br> tags with new lines
  return htmlString.replace(/<br>/g, "\n").replace(/<[^>]+>/g, "");
};

/**
 * Parse formdata to object
 * @param formData (FormData)  form data coming from request
 * @return The prased object
 */
export const parseFormData = (formData) => {
  const object = {};
  for (const [key, value] of formData.entries()) {
    if (object.hasOwnProperty(key)) {
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]];
      }
      object[key].push(value);
    } else {
      object[key] = value;
    }
  }

  return object;
};
/**
 * Replaces any instance of {{ variableName }} with the values
 * @param data (object)  The data object whose keys are the variable names (string) along with corresponding values
 * @param htmlString (string)   The HTML string to be updated
 * @return The updated HTML string
 */
export const replaceMergeTags = (data, htmlString) => {
  Object.keys(data)?.forEach((key) => {
    if (htmlString.includes(`{{ ${key} }}`)) {
      let val = data[key];

      // check if value is an array
      if (val instanceof Array) {
        const listElements = val.map((item) => {
          return `<li>${item}</li>`;
        });

        // create an unordered list in HTML
        val = `<ul>${listElements.join("")}</ul>`; // Join array elements without commas
      }

      const regexPattern = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g");
      htmlString = htmlString.replace(regexPattern, val);
    }
  });

  return htmlString;
};
