import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect, useMemo } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(229, 173, 173);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  overflow: hidden;
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h2`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

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
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {sliderItems &&
          sliderItems.map((item) => {
            return (
              <Slide key={item.id} bg={item.bg}>
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
              </Slide>
            );
          })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
