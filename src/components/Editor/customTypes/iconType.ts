import { applyIconTraits } from "./applyTraitsFns";

const initIconType = (domc, editor) => {
  domc.addType("icon", {
    model: {
      defaults: {
        name: "Icon",
        tagName: "i",
        attributes: {
          class: "fas fa-dog",
          type: "circle",
          backgroundColor: "#3b5998",
          iconColor: "white",
          size: "17",
          height: "35",
          width: "35",
        },
        traits: [
          {
            type: "select",
            label: "Type",
            name: "type",
            options: [
              { value: "circle", name: "Circle" },
              { value: "rectangle", name: "Rectangle" },
            ],
          },
          {
            type: "color",
            label: "Background color",
            name: "backgroundColor",
          },
          {
            type: "color",
            label: "Icon color",
            name: "iconColor",
          },
          {
            type: "number",
            placeholder: "16",
            label: "Icon size (px)",
            name: "size",
          },
          {
            type: "number",
            placeholder: "16",
            label: "Height (px)",
            name: "height",
          },
          {
            type: "number",
            placeholder: "16",
            label: "Width (px)",
            name: "width",
          },
          {
            type: "button",
            label: "Icon",
            name: "icon",
            text: "choose icon",
            full: true,
            command: "icon",
          },
        ],
      },
      updated(property) {
        // only if traits are updated
        if (property === "traits") {
          const traits = this.getTraits();
          applyIconTraits(traits, this);
        }
      },
    },
    view: {
      events: {
        dblclick: () => {
          editor.runCommand("icon");
        },
      },
      init({ model }) {
        let bgColor = model.getAttributes()["backgroundColor"];
        let fontSize = model.getAttributes()["size"];
        let height = model.getAttributes()["height"];
        let width = model.getAttributes()["width"];
        let iconColor = model.getAttributes()["iconColor"];

        model.setStyle({
          border: "none",
          "border-radius": "50%",
          height: `${height}px`,
          width: `${width}px`,
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          color: iconColor,
          "background-color": bgColor,
          cursor: "pointer",
          "font-size": `${fontSize}px`,
        });
      },
    },
  });
};

export { initIconType };
