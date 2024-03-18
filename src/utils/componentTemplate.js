import calculateFieldWidth from "./calculateFieldWidth";
import createFieldElement from "./createFieldElement";
import formatComponentName from "./formatComponentName";
import { v4 as uuidv4 } from "uuid";

function componentTemplate(componentData) {
  const uniqueId = uuidv4();
  const formatComName = formatComponentName(componentData.value.uid);

  const content = componentData.value.layouts.edit
    .map((fieldsRow) => {
      if (fieldsRow.length > 1 && fieldsRow.length <= 3) {
        // Wrap in a flex container
        return `<div style="display: flex; gap: 10px;">${fieldsRow
          .map((field) => {
            const fieldStyle = calculateFieldWidth(field.size);
            const fieldType = getFieldDataType(
              field.name,
              componentData.value.componentSchema,
            );
            return createFieldElement(
              fieldType,
              componentData.value.uid,
              formatComName,
              fieldStyle,
              field.name,
            );
          })
          .join("")}</div>`;
      } else {
        // No need for a flex container
        return fieldsRow
          .map((field) => {
            const fieldStyle = calculateFieldWidth(field.size);
            const fieldType = getFieldDataType(
              field.name,
              componentData.value.componentSchema,
            );
            return createFieldElement(
              fieldType,
              componentData.value.uid,
              formatComName,
              fieldStyle,
              field.name,
            );
          })
          .join("");
      }
    })
    .join("");

  // Wrap the content in a parent div
  const wrappedContent = `<div 
        class="custom-component-wrapper" 
        title="${componentData.value.componentSchema.displayName}"  
        data-gjs-prop="${componentData.value.uid}"
        >${content}</div>`;

  return {
    id: uniqueId,
    label: componentData.value.componentSchema.displayName,
    attributes: {
      class: "fa fa-text",
      title: componentData.value.componentSchema.displayName,
      uid: componentData.value.uid,
    },
    content: wrappedContent,
  };
}

function getFieldDataType(fieldName, componentSchema) {
  return componentSchema.attributes[fieldName].type;
}

export default componentTemplate;
