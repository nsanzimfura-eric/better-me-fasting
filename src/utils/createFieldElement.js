function createFieldElement(
  fieldType,
  uid,
  formatComName,
  fieldStyle,
  fieldName,
) {
  let inputElementClass = "common-builder-input";
  let inputElementEditorClass = "common-builder-editor";
  let inputElementImageClass = "common-builder-image";
  let customCSSClass = "custom-css-editor";

  if (fieldType === "richtext" && fieldName === "cssField") {
    return `<div data-gjs-type="text" data-gjs-prop="${uid}" name="${fieldName}" title="${formatComName}" id="custom-css-input" class="custom-css-editor" style="display:none; width: ${fieldStyle}" class="${customCSSClass}">Insert Your CSS Rules</div>`;
  } else if (fieldType === "richtext") {
    return `<div data-gjs-type="text" name="${fieldName}" data-gjs-prop="${uid}" title="${formatComName}" style="width: ${fieldStyle}" class="${inputElementEditorClass}">Insert Your ${fieldName}</div>`;
  } else if (fieldType === "media") {
    return `<div data-gjs-type="image" data-gjs-prop="${uid}" title="${formatComName}" style="width: ${fieldStyle};" class="${inputElementImageClass}">Upload Your Image</div>`;
  } else if (fieldType === "string") {
    return `<div data-gjs-type="text" name="${fieldName}" data-gjs-prop="${uid}" style="width: ${fieldStyle};" title="${formatComName}" class="${inputElementClass}">Insert Your ${fieldName}</div>`;
  } else if (fieldType === "email") {
    return `<div data-gjs-type="text" name="${fieldName}" data-gjs-prop="${uid}" style="width: ${fieldStyle};" title="${formatComName}" class="${inputElementClass}">Insert Your ${fieldName}</div>`;
  } else if (fieldType === "password") {
    return `<div data-gjs-type="text" name="${fieldName}" data-gjs-prop="${uid}" style="width: ${fieldStyle};" title="${formatComName}" class="${inputElementClass}">Insert Your ${fieldName}</div>`;
  } else if (fieldType === "integer") {
    return `<div data-gjs-type="text" name="${fieldName}" data-gjs-prop="${uid}" style="width: ${fieldStyle};" title="${formatComName}" class="${inputElementClass}">Insert Your ${fieldName}</div>`;
  } else if (fieldType === "date") {
    return `<div data-gjs-type="text" name="${fieldName}" data-gjs-prop="${uid}" style="width: ${fieldStyle};" title="${formatComName}" class="${inputElementClass}">Insert Your ${fieldName}</div>`;
  }
}

export default createFieldElement;
