import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import './Slider.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState(null);
  const wrapper = useRef(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };


  useEffect(() => {
    const getBanner = async () => {
      const res = await fetch("http://localhost:8000/banners");
      if (!res.ok) {
        console.log("sorry we cant find data!");
      } else {
        const banners = await res.json();
        if (banners) {
          setSliderItems(banners);
        }
      }
    };
    getBanner();
  }, []);

  useEffect(() => {
    console.log(slideIndex);
    wrapper.current.style.transform = `translateX(${slideIndex * -100}vw)`;
  }, [slideIndex]);

  return (
    <section className="slider">
      <div className="container">
        <div className="arrow arrow-left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </div>
        <div className="wrapper" ref={wrapper}>
          {sliderItems &&
            sliderItems.map((item) => {
              return (
                <div
                  className="slide"
                  key={item.id}
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="img-container">
                    <img src={`http://localhost:3000/library/${item.img}`} />
                  </div>
                  <div className="info-container">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>SHOW NOW</button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="arrow arrow-right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </div>
      </div>
    </section>
  );
};

export default Slider;
