import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Props } from "./type";
import Arrow from "@/shared/ui/Buttons/Arrow";

const ResponsiveSlider: React.FC<Props> = ({
  className,
  children,
  sliderSettings = {},
}) => {
  const settings: any = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    draggable: true,
    pauseOnHover: true,
    easing: "linear",
    nextArrow: (
      <Arrow classNameStr="absolute z-20 -right-2 lg:-right-5 top-32 md:top-44" />
    ),
    prevArrow: (
      <Arrow
        type="left"
        classNameStr="absolute z-20 -left-2 lg:-left-5 top-32 md:top-44"
      />
    ),
    responsive: [
      {
        breakpoint: 1023.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...sliderSettings,
  };

  return (
    <div
      className={`responsive-slider slider-spacing-sm ${
        className ? className : ""
      }`}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default ResponsiveSlider;
