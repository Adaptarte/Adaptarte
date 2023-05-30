import type { ImgProps } from "components/Img/types";

interface CarouselCardProps {
  background: string;
  complete: boolean;
  description: string;
  img: ImgProps["src"];
  onPress?: () => void;
  title: string;
}

export type { CarouselCardProps };
