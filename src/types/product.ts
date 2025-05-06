import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | StaticImageData;
};
