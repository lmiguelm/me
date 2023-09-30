"use client";

import { ImageField } from "@prismicio/client";
import { Image } from "./image";

import { Carousel as RSCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  images: ImageField[];
};

export function Carousel(props: Props) {
  return (
    <RSCarousel
      autoPlay
      infiniteLoop
      centerMode
      swipeable
      useKeyboardArrows
      showStatus
      showIndicators={false}
      emulateTouch
    >
      {props.images.map((image) => (
        <Image key={image.url} field={image} className="object-fill" />
      ))}
    </RSCarousel>
  );
}
