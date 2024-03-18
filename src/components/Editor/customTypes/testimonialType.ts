const initTestimonialType = (domc) => {
  domc.addType("testimonial-card", {
    model: {
      defaults: {
        name: "Testimonial",
        tagName: "div",
        attributes: {
          class: "card text-center align-items-center px-3 py-5",
        },
        components: [
          {
            type: "image",
            style: {
              "max-width": "100px",
            },
            attributes: {
              src: "https://placehold.it/100",
              class: "rounded-circle",
            },
          },
          {
            type: "text",
            tagName: "p",
            content: `"I had a great experience with this service. The team was professional and responsive. Highly recommended!"`,
            attributes: {
              class: "my-2",
            },
          },
          {
            type: "rating",
            attributes: {
              rating: "4",
            },
          },
          {
            type: "text",
            tagName: "p",
            content: "John Doe",
            style: {
              "font-weight": "bold",
              margin: "0",
            },
          },
          {
            type: "text",
            tagName: "p",
            content: `CEO, XYZ Company`,
            style: {
              margin: "0",
            },
          },
        ],
      },
    },
  });
};

export { initTestimonialType };
