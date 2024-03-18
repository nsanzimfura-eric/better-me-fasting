function removeCustomCssInput(htmlCSSData) {
  // Create a temporary element to parse the HTML
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlCSSData;

  // Find all elements with the id "custom-css-input" and remove them
  const customCssInputElements =
    tempElement.querySelectorAll("#custom-css-input");

  // Extract CSS rules and remove the elements
  let extractedCSS = "";
  customCssInputElements.forEach((element) => {
    extractedCSS += element.innerText;
    element.remove();
  });

  // Get the updated HTML content
  const updatedHtmlCSSData = tempElement.innerHTML;

  return { updatedHtmlCSSData, extractedCSS };
}

export default removeCustomCssInput;
