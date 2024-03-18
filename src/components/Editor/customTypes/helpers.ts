const isAtom = (block) => {
  const atoms = [
    "input-with-label",
    "textarea-with-label",
    "select-with-label",
    "checkbox-with-label",
    "radio-with-label",
  ];
  return atoms.includes(block.id);
};

const isLayout = (block) => {
  const layouts = ["column1", "column2", "column3", "column3-7"];
  return layouts.includes(block.id);
};

const isComponent = (block) => {
  const components = [
    "section-title",
    "code-snippet",
    "icon-button",
    "card",
    "button-2",
    "map",
    "countdown",
  ];
  return components.includes(block.id);
};

const isSection = (block) => {
  const sections = [
    "navbar",
    "info-card",
    "list",
    "image-grid",
    "about-section",
    "footer-section",
    "hero-section",
    "gallery-section",
    "slider-section",
    "3x-card",
  ];
  return sections.includes(block.id);
};

const getTraitValue = (traits, type) => {
  return traits.find((trait) => trait.attributes.name === type)?.attributes
    ?.value;
};

const sliderScript = function (props) {
  const {
    direction,
    slidesPerView,
    spaceBetween,
    effect,
    speed,
    loop,
    autoPlay,
    navigation,
    pagination,
  } = props.attributes;

  let oldSliderInstance = this.querySelector(".swiper").swiper;

  if (oldSliderInstance) {
    oldSliderInstance.destroy(true, true);
  }

  let container = this.querySelector(".swiper");
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";

  let prev = this.querySelector(".swiper-button-prev");
  let next = this.querySelector(".swiper-button-next");
  let paginate = this.querySelector(".swiper-pagination");

  if (!navigation) {
    prev.style.display = "none";
    next.style.display = "none";
  }

  const initSlider = () => {
    const sliderEffects = {
      flip: {
        flipEffect: {
          slideShadows: false,
        },
      },
      fade: {
        fadeEffect: {
          crossFade: true,
        },
      },
      cube: {
        cubeEffect: {
          slideShadows: false,
        },
      },
      creative: {
        creativeEffect: {
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      },
      coverflow: {
        coverflowEffect: {
          rotate: 30,
          slideShadows: false,
        },
      },
    };

    //  @ts-ignore-next-line
    var swiper = new Swiper(container, {
      navigation: {
        nextEl: next,
        prevEl: prev,
      },

      ...(pagination
        ? {
            pagination: {
              el: paginate,
            },
          }
        : {}),

      direction: direction,
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      speed: speed,
      loop: loop,
      autoplay: autoPlay,
      ...(effect
        ? {
            effect,
            ...sliderEffects[effect],
          }
        : {}),
      breakpoints: {
        // when window width is >= 480px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: Number(slidesPerView) > 2 ? 2 : 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: Number(slidesPerView) > 2 ? 2 : 1,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1170: {
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
        },
      },
    });
  };

  //  @ts-ignore-next-line
  if (typeof Swiper == "undefined") {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    script.onload = initSlider;
    document.head.appendChild(script);
    document.head.appendChild(link);
  } else {
    initSlider();
  }
};

export {
  isAtom,
  isLayout,
  isComponent,
  isSection,
  getTraitValue,
  sliderScript,
};
