function findElementsWithClasses(obj, classToFind) {
  const results = [];
  const nodeObject = obj.pages[0].frames[0].component.components.length
    ? obj.pages[0].frames[0].component.components
    : [];

  function traverseComponents(components, parentComponentName = "") {
    for (const component of components) {
      if (component.classes && component.classes.includes(classToFind)) {
        results.push(component);
      }
      if (component.components) {
        traverseComponents(component.components, parentComponentName);
      }
    }
  }

  traverseComponents(nodeObject);
  return formatData(results);
}

function formatData(data) {
  const formattedArray = [];

  data.forEach((classData) => {
    const groupName = transformNaming(classData.prop);
    const formattedItem = {};

    classData.components?.forEach((component) => {
      if (component.components && component.components.length === 1) {
        const fieldName = component.attributes.name;
        const fieldValue =
          component.components && component.components[0].content;
        if (!formattedItem[fieldName] && fieldName !== undefined) {
          formattedItem[fieldName] = fieldValue;
        }
      } else if (component.components && component.components.length > 1) {
        const hasBrTagName = component.components.some((subComponent) => {
          return subComponent.tagName === "br";
        });

        if (hasBrTagName) {
          const fieldName = component.attributes.name;
          let fieldValue = "";
          // Remove the object with tagName === "br" and concatenate content
          const filteredComponents = component.components.filter(
            (subComponent) => {
              return subComponent.tagName !== "br";
            },
          );
          filteredComponents.forEach((subComponent, index) => {
            fieldValue += subComponent.content;
            if (index < filteredComponents.length - 1) {
              fieldValue += "<br>";
            }
          });
          if (!formattedItem[fieldName] && fieldName !== undefined) {
            formattedItem[fieldName] = fieldValue;
          }
        } else {
          component.components.forEach((subComponent) => {
            const fieldName = subComponent.attributes.name;
            const fieldValue =
              subComponent.components && subComponent.components[0].content;
            if (!formattedItem[fieldName] && fieldName !== undefined) {
              formattedItem[fieldName] = fieldValue;
            }
          });
        }
      }
    });

    if (Object.keys(formattedItem).length > 0) {
      formattedArray.push({ [groupName]: formattedItem });
    }
  });

  return formattedArray;
}

function transformNaming(input) {
  const parts = input.split(".");
  const lastPart = parts[parts.length - 1];
  const output = lastPart + "." + lastPart;
  return output;
}
export default findElementsWithClasses;
