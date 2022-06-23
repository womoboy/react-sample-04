import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  const [sliderItems, setSliderItems] = useState(null);

  useEffect(() => {
    const getBanner = async () => {
      const res = await fetch("http://localhost:8000/banners");
      if (!res.ok) {
        console.log("sorry we cant find data!");
      } else {
        const banners = await res.json();
        setSliderItems(await banners);
      }
    };
    getBanner();
  }, []);

  return (
    <section className="slider">
      <div className="container">
        <div className="arrow arrow-left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </div>
        <div className="wrapper">
          {sliderItems &&
            sliderItems.map((item) => {
              return (
                <div className="slide" key={item.id} style={{backgroundColor: item.bg}}>
                  <div className="img-container">
                    <img src={item.img} />
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
