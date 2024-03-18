import { sliderScript } from "./helpers";

const initSliderType = (domc) => {
  domc.addType("slide-content", {
    model: {
      defaults: {
        name: "Slide Content",
        tagName: "div",
        components: [
          {
            type: "text",
            content: "Slide content",
          },
        ],
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          height: "100%",
          width: "100%",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          ...model.getStyle(),
        });
      },
    },
  });

  domc.addType("swiper-slide", {
    model: {
      defaults: {
        name: "Slide",
        tagName: "div",
        attributes: {
          class: "swiper-slide",
        },
        components: [
          {
            type: "slide-content",
          },
        ],
      },
      removed() {
        let wrapper = this.parent();
        let cmp = wrapper.parent().parent();
        let attributes = cmp.getAttributes();

        cmp.setAttributes({
          ...attributes,
          sliderId: `slider-${Math.floor(Math.random() * 16777215).toString(
            16
          )}`,
        });
        let slidesLength = wrapper.components().models.length;
        cmp
          .getTrait("slidesPerView")
          .set("max", slidesLength > 10 ? 10 : slidesLength);
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          height: "100%",
          "text-align": "center",
          " font-size": "18px",
          background: "#fff",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          padding: "20px",
          ...model.getStyle(),
        });
      },
    },
  });

  domc.addType("swiper-wrapper", {
    model: {
      defaults: {
        name: "Wrapper",
        tagName: "div",
        attributes: {
          class: "swiper-wrapper",
        },
        components: [
          {
            type: "swiper-slide",
          },
          {
            type: "swiper-slide",
          },
          {
            type: "swiper-slide",
          },
        ],
      },
    },
  });

  domc.addType("swiper-next", {
    model: {
      defaults: {
        name: "Next",
        tagName: "div",
        attributes: {
          class: "swiper-button-next",
        },
      },
    },
  });

  domc.addType("swiper-prev", {
    model: {
      defaults: {
        name: "Prev",
        tagName: "div",
        attributes: {
          class: "swiper-button-prev",
        },
      },
    },
  });

  domc.addType("swiper-pagination", {
    model: {
      defaults: {
        name: "Swiper pagination",
        tagName: "div",
        attributes: {
          class: "swiper-pagination",
        },
      },
    },
  });

  domc.addType("slider", {
    model: {
      defaults: {
        "script-props": ["attributes"],
        tagName: "div",
        script: sliderScript,
        attributes: {
          direction: "horizontal",
          slidesPerView: 2,
          spaceBetween: 0,
          effect: "",
          speed: 300,
          loop: true,
          autoPlay: true,
          navigation: true,
          pagination: true,
        },
        traits: [
          {
            type: "text",
            label: "Slider Id",
            name: "sliderId",
            attributes: { style: "display: none" },
          },
          {
            type: "number",
            placeholder: "3",
            label: "Slides Per View",
            min: 1,
            max: 4,
            name: "slidesPerView",
          },
          {
            type: "number",
            placeholder: "10",
            label: "Space Between (px)",
            name: "spaceBetween",
          },
          {
            type: "select",
            label: "Effect",
            name: "effect",
            options: [
              { value: "", name: "None" },
              { value: "flip", name: "Flip" },
              { value: "fade", name: "Fade" },
              { value: "cube", name: "Cube" },
              { value: "creative", name: "Creative" },
              { value: "coverflow", name: "Coverflow" },
            ],
          },
          {
            type: "number",
            placeholder: "10",
            label: "Speed (ms)",
            name: "speed",
          },
          {
            type: "checkbox",
            label: "Loop",
            name: "loop",
          },
          {
            type: "checkbox",
            label: "Auto Play",
            name: "autoPlay",
          },
          {
            type: "checkbox",
            label: "Navigation",
            name: "navigation",
          },
          {
            type: "checkbox",
            label: "Pagination",
            name: "pagination",
          },
        ],
        components: [
          {
            tagName: "div",
            attributes: {
              class: "swiper",
            },
            styles: {
              height: "100%",
              width: "100%",
            },
            components: [
              {
                type: "swiper-wrapper",
                components: [
                  {
                    type: "swiper-slide",
                  },
                  {
                    type: "swiper-slide",
                  },
                  {
                    type: "swiper-slide",
                  },
                  {
                    type: "swiper-slide",
                  },
                ],
              },
              {
                type: "swiper-next",
              },
              {
                type: "swiper-prev",
              },
              {
                type: "swiper-pagination",
              },
            ],
          },
        ],

        styles: `
              .swiper {
                height: 100%; 
              }
            .swiper-slide > div > img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover
            }`,
      },
    },
    view: {
      init({ model }) {
        model.setStyle({
          width: "100%",
          height: "500px",
          padding: "1.5rem",
          ...model.getStyle(),
        });
        let slidesLength = model.getChildAt(0).getChildAt(0).components()
          .models.length;

        model
          .getTrait("slidesPerView")
          .set("max", slidesLength > 10 ? 10 : slidesLength);
      },
    },
  });
};

export { initSliderType };
