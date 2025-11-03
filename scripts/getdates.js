// This script will run after the HTML is parsed, thanks to the 'defer' attribute.

// 1. Get the current year
const currentYear = new Date().getFullYear();

// 2. Set the current year in the span with id "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// 3. Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// 4. Set the last modified date in the paragraph with id "lastModified"
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModifiedDate}`;
