import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "./assets/logo.png";
import descriptionMilk from "./assets/description-milk.png";
import "swiper/css";
import "swiper/css/pagination";

const App = () => {
  const bodyRef = React.useRef(null);
  const previewRef = React.useRef(null);
  const previewWrapperRef = React.useRef(null);
  const firstScreenRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const productLineRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: bodyRef.current,
        start: "top top",
        end: "+=3460",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      previewRef.current, // Второй экран появление
      {
        translateX: "-100vw",
      },
      {
        translateX: "100vw",
        ease: "none",
        duration: 10,
        scrollTrigger: {
          scrub: 1,
          start: "top top",
          end: "+=600",
        },
      }
    );

    tl.to(
      previewWrapperRef.current, // Второй экран исчезновение
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=900",
          end: "960",
        },
      },
      "+=0.1"
    );

    tl.to(
      descriptionRef.current, // Описание появление
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=1060",
          end: "1160",
        },
      },
      "+=0.1"
    );

    tl.to(
      descriptionRef.current, // Описание исчезновение
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=1760",
          end: "1860",
        },
      },
      "+=0.1"
    );

    tl.to(
      productLineRef.current, // Продуктовая линейка
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=2060",
          end: "2160",
        },
      },
      "+=0.1"
    );

    tl.to(
      productLineRef.current, // Продуктовая линейка
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=2660",
          end: "2760",
        },
      },
      "+=0.1"
    );

    tl.to(
      aboutRef.current, // О проекте появление
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=2960",
          end: "end end",
        },
      },
      "+=0.1"
    );

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={bodyRef}>
      <div className="first-screen" ref={firstScreenRef}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
					autoplay={{
						delay: 3000,
					}}
          loop={true}
        >
          <SwiperSlide>
            <div className="slide sleep">
              <div className="slide__panel">
                <img src={logo} alt="logo" />
                <h2 className="slide__description">И сны будут слаще</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide moments">
              <div className="slide__panel">
                <img src={logo} alt="logo" />
                <h2 className="slide__description">И моменты станут ярче</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide work">
              <div className="slide__panel">
                <img src={logo} alt="logo" />
                <h2 className="slide__description">И всё получится</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div ref={previewRef} className="preview">
        <div ref={previewWrapperRef} className="preview__wrapper">
          <img src={logo} alt="logo" />
          <h2 className="slide__description">
            Свежие, молочные продукты <br /> с заботой о тебе
          </h2>
        </div>
        <div className="hide preview__wrapper" ref={descriptionRef}>
          <img src={logo} alt="logo" className="slide__description__logo" />
          <div className="slide__description__row">
            <h2 className="slide__description">
              «Обнимуу» - молоко и молочные продукты, которые созданы дарить
              заботу и теплые моменты спокойствия и нежности тебе и твоим самым
              близким людям.
            </h2>
						<img src={descriptionMilk} alt="Молоко обнимуу" />
          </div>
        </div>
        <div className="hide preview__wrapper" ref={productLineRef}>
          Товары
        </div>
        <div className="hide preview__wrapper" ref={aboutRef}>
          О продукте
        </div>
      </div>
    </div>
  );
};

export default App;
