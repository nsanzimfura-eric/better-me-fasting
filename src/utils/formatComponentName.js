function formatComponentName(input) {
  const parts = input.split(".");
  const componentName = parts[parts.length - 1].replace(/-/g, " ");
  const formattedComponentName = componentName.replace(/\b\w/g, (c) =>
    c.toUpperCase(),
  );
  return formattedComponentName;
}

export default formatComponentName;
