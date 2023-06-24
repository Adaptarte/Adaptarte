import type { ImgProps } from "components/Img/types";

interface ExcerciseProps {
  background: string;
  description: string;
  img: ImgProps["src"];
  onPress?: () => void;
  title: string;
}

export type { ExcerciseProps };
