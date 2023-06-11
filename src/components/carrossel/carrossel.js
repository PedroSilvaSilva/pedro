import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const Containerdiv = styled.div`
    width: 100%;

    img {
      height: 400px;
      border-radius: 15px;
    }
  `;

  return (
    <div>
      <Containerdiv>
        <img
          src="https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg"
          alt=""
        />
      </Containerdiv>
      {/* <div>
        <img
          className="carrossel-image"
          src="https://images.unsplash.com/photo-1642983988364-52c76af6f950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&w=1000&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          className="carrossel-image"
          src="https://st5.depositphotos.com/35914836/64942/i/450/depositphotos_649421436-stock-photo-beautiful-sunrise-over-the-sea.jpg"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Carrossel;
