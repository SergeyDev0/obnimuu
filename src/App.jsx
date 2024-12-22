import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "./assets/logo.png";
import "swiper/css";
import "swiper/css/pagination";

const App = () => {
  const previewRef = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const preview = previewRef.current;

    if (preview) {
      // Проверка, что элемент существует
      gsap.to(preview, {
        x: 100,
        duration: 2,
        ease: "bounce",
        delay: 1,
        scrollTrigger: {
          trigger: "#thirdCircle",
        },
      });
    }

    return () => {
      ScrollTrigger.kill(); // Удаление триггеров при размонтировании
    };
  }, []);

  return (
    <>
      <div className="first-screen">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="slide sleep">
              <div className="slide__panel">
                <img src={logo} alt="logo" />
                <h2 className="slide__descrpition">И сны будут слаще</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide moments">
              <div className="slide__panel">
                <img src={logo} alt="logo" />
                <h2 className="slide__descrpition">И моменты станут ярче</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide work">
              <div className="slide__panel">
                <img src={logo} alt="logo" />
                <h2 className="slide__descrpition">И всё получится</h2>
              </div>
              <div className="slide__img-wrapper"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div ref={previewRef} className="preview">
        asfasf
      </div>
    </>
  );
};

export default App;
