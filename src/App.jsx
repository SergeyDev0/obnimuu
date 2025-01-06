import React from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "./assets/logo.png";
import logoMilkExpress from "./assets/logo-milk-express.png";
import descriptionMilk from "./assets/description-milk.png";
import topLeaf from "./assets/top-leaf.png";
import bottomLeaf from "./assets/bottom-leaf.png";
import aboutWorkers from "./assets/workers.png";
import aboutPlatforms from "./assets/platforms.png";
import aboutProcessing from "./assets/processing.png";
import productMilk1 from "./assets/product-milk1.png";
import productMilk2 from "./assets/product-milk2.png";
import productMilk3 from "./assets/product-milk3.png";
import productMilkBottle1 from "./assets/product-milk-bottle1.png";
import productMilkBottle2 from "./assets/product-milk-bottle2.png";
import productMilkBottle3 from "./assets/product-milk-bottle3.png";
import productKefir1 from "./assets/product-kefir1.png";
import productKefir2 from "./assets/product-kefir2.png";
import productKefir3 from "./assets/product-kefir3.png";
import productCottageCheese1 from "./assets/product-cottage-cheese1.png";
import productCottageCheese2 from "./assets/product-cottage-cheese2.png";
import productCottageCheese3 from "./assets/product-cottage-cheese3.png";
import productSourCream1 from "./assets/product-sour-cream1.png";
import productSourCream2 from "./assets/product-sour-cream2.png";
import productSourCream3 from "./assets/product-sour-cream3.png";
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
  const featuresRef = React.useRef(null);

  const isMobile = useMediaQuery("(max-width: 580px)");

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: bodyRef.current,
        start: "top top",
        end: (isMobile ? "+=2960" : "+=2360"),
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      previewRef.current, // Второй экран появление
      {
        translateY: "100vh",
      },
      {
        translateY: "-100vh",
        visibility: "visible",
        ease: "none",
        duration: 10,
        scrollTrigger: {
          scrub: 1,
          start: "+=0",
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
        visibility: "visible",
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=960",
          end: "1060",
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
          start: "+=1560",
          end: "1660",
        },
      },
      "+=0.1"
    );

    tl.to(
      productLineRef.current, // Продуктовая линейка
      {
        opacity: 1,
        visibility: "visible",
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=1660",
          end: "1760",
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
          start: "+=2160",
          end: "2260",
        },
      },
      "+=0.1"
    );

    tl.to(
      aboutRef.current, // О проекте появление
      {
        opacity: 1,
        visibility: "visible",
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          start: "+=2260",
          end: "2360",
        },
      },
      "+=0.1"
    );

    if (isMobile) {
      tl.to(
        aboutRef.current, // О проекте исчезновение
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            scrub: 1,
            start: "+=2760",
            end: "2860",
          },
        },
        "+=0.1"
      );

      tl.to(
        featuresRef.current, // Преимущества появление
        {
          opacity: 1,
          visibility: "visible",
          ease: "none",
          scrollTrigger: {
            scrub: 1,
            start: "+=2860",
            end: "2960",
          },
        },
        "+=0.1"
      );
    }

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
                <img className="first-screen__leaf top-leaf" src={topLeaf} />
                <img
                  className="first-screen__leaf bottom-leaf"
                  src={bottomLeaf}
                />
                <img className="logo" src={logo} alt="logo" />
                <h2 className="slide__description">И сны будут слаще</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide moments">
              <div className="slide__panel">
                <img className="first-screen__leaf top-leaf" src={topLeaf} />
                <img
                  className="first-screen__leaf bottom-leaf"
                  src={bottomLeaf}
                />
                <img className="logo" src={logo} alt="logo" />
                <h2 className="slide__description">И моменты станут ярче</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide work">
              <div className="slide__panel">
                <img className="first-screen__leaf top-leaf" src={topLeaf} />
                <img
                  className="first-screen__leaf bottom-leaf"
                  src={bottomLeaf}
                />
                <img className="logo" src={logo} alt="logo" />
                <h2 className="slide__description">И всё получится</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div ref={previewRef} className="preview">
        <div ref={previewWrapperRef} className="preview__wrapper second-slide">
          <div className="wrapper-screen">
            <img className="logo" src={logo} alt="logo" />
            <h2 className="slide__description">
              Свежие молочные продукты <br /> с заботой о тебе
            </h2>
            <img className="preview__leaf top-leaf" src={topLeaf} />
            <img className="preview__leaf top-leaf1" src={topLeaf} />
            <img className="preview__leaf bottom-leaf" src={bottomLeaf} />
          </div>
        </div>
        <div className="hide preview__wrapper" ref={descriptionRef}>
          <div className="wrapper-screen description">
            <img src={logo} alt="logo" className="logo" />
            <div className="slide__description__row">
              <h2 className="slide__description">
                «Обнимуу» - молоко и молочные продукты, которые созданы дарить
                заботу и теплые моменты спокойствия и нежности тебе и твоим
                самым близким людям.
              </h2>
              <img className="milk" src={descriptionMilk} alt="Молоко обнимуу" />
              <img className="description__leaf bottom-leaf" src={bottomLeaf} />
              <img
                className="description__leaf bottom-leaf1"
                src={bottomLeaf}
              />
            </div>
          </div>
        </div>
        <div className="hide preview__wrapper" ref={productLineRef}>
          <div className="wrapper-screen products">
            <div className="logo-text__wrapper">
              <img src={logo} alt="logo" className="slide__description__logo" />
              <p>
                Широкая линейка натуральных вологодских молочных продуктов для
                вкусных завтраков, уютных семейных ужинов и для самого важного -
                стакана молока перед сном, как в детстве из маминых рук
              </p>
            </div>
            <div className="products__row">
              <div className="products__row-top">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  <SwiperSlide>
                    <img src={productMilk1} alt="Молоко в коробке 3,2%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productMilk2} alt="Молоко в коробке 2,5%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productMilk3} alt="Молоко в коробке 1,5%" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  <SwiperSlide>
                    <img src={productMilkBottle1} alt="Молоко в бутылке 3,2%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productMilkBottle2} alt="Молоко в бутылке 3,2%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productMilkBottle3} alt="Молоко в бутылке 3,2%" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="products__row-bottom">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  <SwiperSlide>
                    <img src={productKefir1} alt="Кефир 3,2%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productKefir2} alt="Кефир 2,5%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productKefir3} alt="Кефир 1,0%" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  <SwiperSlide>
                    <img src={productCottageCheese1} alt="Творог 9%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productCottageCheese2} alt="Творог 5%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productCottageCheese3} alt="Творог 0%" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                >
                  <SwiperSlide>
                    <img src={productSourCream1} alt="Сметана 10%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productSourCream2} alt="Сметана 15%" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={productSourCream3} alt="Сметана 20%" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="hide preview__wrapper" ref={aboutRef}>
          <div className="wrapper-screen about mobile">
            <div className="about__col">
              <div className="about__logo-list">
                <img src={logo} alt="Логотип обнимуу" />
                <img src={logoMilkExpress} alt="Логотип милк экспресс" />
              </div>
              <div className="about__text">
                <p>«Обнимуу» - флагманский бренд «Милк Экспресс».</p>
                <p className="about__text-top">
                  Российский производитель молочной продукции. <br />
                  Входит в ТОП-25 компаний-переработчиков молока
                </p>
                <p className="about__text-list">Филиалы «Милк Экспресс»:</p>
                <ul className="about__list">
                  <li>Молочный завод д. Серково (г. Щелково)</li>
                  <li>Молочный завод в д. Зарудня (г. Коломна)</li>
                  <li>«Череповецкий молочный комбинат»</li>
                  <li>
                    Распределительный центр в г. Щелково на 8000м2 и собственная
                    логистика
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__info-list">
              <img src={aboutProcessing} alt="Переработка 500 тонн в сутки" />
              <img
                src={aboutPlatforms}
                alt="Общая площадь 10500 производственных площадок"
              />
              <img
                src={aboutWorkers}
                alt="Более 500 человек численность работников"
              />
            </div>
            <div className="about__links">
              <a href="https://milkexpress.ru/" className="about__link">
                На сайт производителя
              </a>
              <a href="mailto:Info@moltimilk.ru" className="about__link">
                Напишите нам
              </a>
            </div>

            <div className="about__mobile">
              <div className="wrapper">
                <div className="about__left-col">
                  <img src={logo} alt="Логотип обнимуу" />
                  <p>«Обнимуу»&nbsp;- флагманский бренд «Милк&nbsp;Экспресс».</p>
                  <ul className="about__features-list">
                    <li className="about__features-list__item">
                      Переработка 500 тонн молока в сутки
                    </li>
                    <li className="about__features-list__item">
                      Общая площадь производственных площадок 10500&nbsp;кв.м.
                    </li>
                    <li className="about__features-list__item">
                      более 500 человек – численность работников
                    </li>
                  </ul>
                </div>
                <div className="about__right-col">
                  <img src={logoMilkExpress} alt="Логотип милк экспресс" />
                  <p className="about__text-top">
                    Российский производитель молочной продукции. <br />
                    Входит в ТОП-25 компаний-переработчиков молока
                  </p>
                  <p className="about__text-list">Филиалы «Милк&nbsp;Экспресс»:</p>
                  <ul className="about__list">
                    <li>Молочный завод д. Серково (г.&nbsp;Щелково)</li>
                    <li>Молочный завод в д. Зарудня (г.&nbsp;Коломна)</li>
                    <li>«Череповецкий молочный комбинат»</li>
                    <li>
                      Распределительный центр в г.&nbsp;Щелково на 8000м2 и
                      собственная логистика
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about__links">
                <a href="https://milkexpress.ru/" className="about__link">
                  На сайт производителя
                </a>
                <a href="mailto:Info@moltimilk.ru" className="about__link">
                  Напишите нам
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hide preview__wrapper" ref={featuresRef}>
          <div className="wrapper-screen features">
            <img src={logo} alt="Логотип обнимуу" />
            <p>«Обнимуу» - флагманский бренд «Милк&nbsp;Экспресс».</p>
            <ul className="features__features-list">
              <li className="features__features-list__item">
                Переработка 500 тонн молока в сутки
              </li>
              <li className="features__features-list__item">
                Общая площадь производственных площадок 10500&nbsp;кв.м.
              </li>
              <li className="features__features-list__item">
                более 500 человек – численность работников
              </li>
            </ul>
            <div className="features__links">
              <a href="https://milkexpress.ru/" className="features__link">
                На сайт производителя
              </a>
              <a href="mailto:Info@moltimilk.ru" className="features__link">
                Напишите нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
