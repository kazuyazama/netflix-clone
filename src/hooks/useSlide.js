import { useRef } from "react";

export const useSlide = () => {
  const scrollRef = useRef(null);

    //横スライドする為の関数
  const slideLeft = (length) => {
    const slider = scrollRef.current;
    slider.scrollLeft = slider.scrollLeft - length;
  };

  const slideRight = (length) => {
    const slider = scrollRef.current;
    slider.scrollLeft = slider.scrollLeft + length;
  };

  return { scrollRef, slideRight, slideLeft };
};
