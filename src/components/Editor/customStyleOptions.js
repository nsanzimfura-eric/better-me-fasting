export const sectors = [
  {
    name: "General",
    open: false,
    properties: [
      {
        extend: "float",
        type: "radio",
        default: "none",
        options: [
          { value: "none", className: "fa fa-times" },
          { value: "left", className: "fa fa-align-left" },
          { value: "right", className: "fa fa-align-right" },
        ],
      },
      "opacity",
      "display",
      {
        extend: "position",
        type: "select",
        options: [
          { value: "static", name: "Static" },
          { value: "sticky", name: "Sticky" },
          { value: "relative", name: "Relative" },
          { value: "absolute", name: "Absolute" },
          { value: "fixed", name: "Fixed" },
        ],
      },
      "top",
      "right",
      "left",
      "bottom",
    ],
  },
  {
    name: "Flex",
    open: false,
    properties: [
      {
        name: "Flex Container",
        property: "display",
        type: "select",
        defaults: "block",
        list: [
          { value: "block", name: "Disable" },
          { value: "flex", name: "Enable" },
        ],
      },

      {
        name: "Direction",
        property: "flex-direction",
        type: "select",
        defaults: "row",
        list: [
          {
            value: "row",
            name: "Row",
          },
          {
            value: "row-reverse",
            name: "Row reverse",
          },
          {
            value: "column",
            name: "Column",
          },
          {
            value: "column-reverse",
            name: "Column reverse",
          },
        ],
      },
      {
        name: "Justify",
        property: "justify-content",
        type: "select",
        defaults: "flex-start",
        list: [
          {
            value: "flex-start",
            name: "Start",
          },
          {
            value: "flex-end",
            name: "End",
          },
          {
            value: "space-between",
            name: "Space between",
          },
          {
            value: "space-around",
            name: "Space around",
          },
          {
            value: "center",
            name: "Center",
          },
        ],
      },
      {
        name: "Align",
        property: "align-items",
        type: "select",
        defaults: "center",
        list: [
          {
            value: "flex-start",
            name: "Start",
          },
          {
            value: "flex-end",
            name: "End",
          },
          {
            value: "stretch",
            name: "Stretch",
          },
          {
            value: "center",
            name: "Center",
          },
        ],
      },

      {
        name: "Order",
        property: "order",
        type: "integer",
        defaults: 0,
        min: 0,
      },
      {
        name: "Flex",
        property: "flex",
        type: "composite",
        properties: [
          {
            name: "Grow",
            property: "flex-grow",
            type: "integer",
            defaults: 0,
            min: 0,
          },
          {
            name: "Shrink",
            property: "flex-shrink",
            type: "integer",
            defaults: 0,
            min: 0,
          },
          {
            name: "Basis",
            property: "flex-basis",
            type: "integer",
            units: ["px", "%", ""],
            unit: "",
            defaults: "auto",
          },
        ],
      },
    ],
  },
  {
    name: "Extra",
    open: false,
    buildProps: ["transition", "perspective", "transform"],
  },
];
