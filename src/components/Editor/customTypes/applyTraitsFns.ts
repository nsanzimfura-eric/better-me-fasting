import { getTraitValue } from "./helpers";

const applyRatingTraits = (traits, model) => {
  const rating = getTraitValue(traits, "rating");
  const iconColorActive = getTraitValue(traits, "iconColorActive");
  const iconColorInActive = getTraitValue(traits, "iconColorInActive");

  const childs = model.findType("icon");

  childs.forEach((child, index) => {
    let oldAttributes = child.getAttributes();
    let oldStyles = child.getStyle();
    child.setAttributes({
      ...oldAttributes,
      iconColor: index < rating ? iconColorActive : iconColorInActive,
    });

    child.setStyle({
      ...oldStyles,
      color: index < rating ? iconColorActive : iconColorInActive,
    });
  });
};

const applyIconTraits = (traits, model) => {
  let oldStyles = model.getStyle();
  let newStyles = {};

  const type = getTraitValue(traits, "type");
  const bgColor = getTraitValue(traits, "backgroundColor");
  const iconColor = getTraitValue(traits, "iconColor");
  const iconSize = getTraitValue(traits, "size");
  const icon = getTraitValue(traits, "icon");
  const height = getTraitValue(traits, "height");
  const width = getTraitValue(traits, "width");

  if (type === "rectangle") {
    newStyles = { ...newStyles, "border-radius": "0" };
  } else {
    newStyles = { ...newStyles, "border-radius": "50%" };
  }

  if (bgColor && bgColor !== "#3b5998") {
    newStyles = {
      ...newStyles,
      "background-color": bgColor,
    };
  }
  if (iconColor && iconColor !== "white") {
    newStyles = {
      ...newStyles,
      color: iconColor,
    };
  }
  if (iconSize && iconSize !== "16") {
    newStyles = {
      ...newStyles,
      "font-size": `${iconSize}px`,
    };
  }
  if (height && height !== "35") {
    newStyles = {
      ...newStyles,
      height: `${height}px`,
    };
  }
  if (width && width !== "35") {
    newStyles = {
      ...newStyles,
      width: `${width}px`,
    };
  }
  if (icon && icon !== "") {
    model.setClass(`fas ${icon}`);
  }

  model.setStyle({ ...oldStyles, ...newStyles });
};

const applyMapTraits = (traits, model) => {
  const address = getTraitValue(traits, "address");
  const satellite = getTraitValue(traits, "satellite");
  const zoom = getTraitValue(traits, "zoom");
  const old = model.getAttributes();
  model.setAttributes({
    ...old,
    src: `https://maps.google.com/maps?width=100%&height=100%&hl=en&t=${satellite}&z=${
      zoom || 14
    }&ie=UTF8&iwloc=B&output=embed&q=${address || "England, UK"}`,
  });
};

export { applyIconTraits, applyRatingTraits, applyMapTraits };
