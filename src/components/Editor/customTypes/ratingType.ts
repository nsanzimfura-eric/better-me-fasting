import { applyRatingTraits } from "./applyTraitsFns";

const initRatingType = (domc) => {
  domc.addType("rating", {
    model: {
      defaults: {
        name: "Rating",
        tagName: "div",
        attributes: {
          rating: "4",
          iconColorActive: "#ffb500",
          iconColorInActive: "#c8c8c8",
        },
        components: [
          {
            type: "icon",
            attributes: {
              class: "fas fa-star",
              iconColor: "#ffb500",
              backgroundColor: "transparent",
            },
          },
          {
            type: "icon",
            attributes: {
              class: "fas fa-star",
              iconColor: "#ffb500",
              backgroundColor: "transparent",
            },
          },
          {
            type: "icon",
            attributes: {
              class: "fas fa-star",
              iconColor: "#ffb500",
              backgroundColor: "transparent",
            },
          },
          {
            type: "icon",
            attributes: {
              class: "fas fa-star",
              iconColor: "#ffb500",
              backgroundColor: "transparent",
            },
          },
          {
            type: "icon",
            attributes: {
              class: "fas fa-star",
              iconColor: "#c8c8c8",
              backgroundColor: "transparent",
            },
          },
        ],
        traits: [
          {
            type: "number",
            placeholder: "3",
            label: "Rating",
            name: "rating",
            min: 0,
            max: 5,
            step: 1,
          },
          {
            type: "color",
            label: "Icon color (active)",
            name: "iconColorActive",
          },
          {
            type: "color",
            label: "Icon color (Inactive)",
            name: "iconColorInActive",
          },
        ],
      },
      updated(property) {
        // only if traits are updated
        if (property === "traits") {
          console.log("the model", this);
          const traits = this.getTraits();
          applyRatingTraits(traits, this);
        }
      },
    },

    view: {
      init({ model }) {
        model.setStyle({
          display: "flex",
          padding: "0px 1rem 0px 1rem",
          margin: "0.5rem 0px 0.5rem 0px",
          width: "max-content",
        });
      },
    },
  });
};

export { initRatingType };
