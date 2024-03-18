import { applyMapTraits } from "./applyTraitsFns";

const initGoogleMapType = (domc) => {
  domc.addType("google-map", {
    model: {
      defaults: {
        tagName: "div",
        attributes: {
          height: "450",
          width: "600",
          src: "https://maps.google.com/maps?width=100%&height=100%&hl=en&t=&z=14&ie=UTF8&iwloc=B&output=embed&q=England, UK",
          frameborder: "0",
          scrolling: "no",
          marginheight: "0",
          marginwidth: "0",
          zoom: "14",
        },
        component: [
          {
            tagName: "iframe",
          },
        ],
        traits: [
          {
            type: "text",
            label: "Address",
            name: "address",
            placeholder: "England, UK",
          },
          {
            type: "number",
            label: "Height",
            name: "height",
            placeholder: "400",
          },
          {
            type: "number",
            label: "Width",
            name: "width",
            placeholder: "600",
          },
          {
            type: "checkbox",
            label: "Satellite",
            name: "satellite",
            valueTrue: "k",
            valueFalse: "",
          },
          {
            type: "number",
            label: "Zoom",
            name: "zoom",
            placeholder: "0-100",
            min: 5,
            max: 100,
            step: 2,
          },
        ],
      },
      updated(property) {
        // only if traits are updated
        if (property === "traits") {
          const traits = this.getTraits();
          applyMapTraits(traits, this);
        }
      },
    },
  });
};

export { initGoogleMapType };
