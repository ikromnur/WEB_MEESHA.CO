import { StaticImageData } from "next/image";

export enum Size {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  EXTRA_LARGE = "Extra Large",
}

export type Cart = {
  id: number;
  name: string;
  image: string | StaticImageData;
  price: number;
  quantity: number;
  size: Size;
};
