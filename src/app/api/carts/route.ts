import { Cart, Size } from "@/types/cart";
import { NextResponse } from "next/server";

const cartItems: Cart[] = [
  {
    id: 1,
    name: "Product A",
    image:
      "https://asset.kompas.com/crops/Ahi6gSzfV4IpyW-ifHb3F2nSGQU=/3x27:921x640/1200x800/data/photo/2022/09/09/631aa84b385fd.jpg",
    price: 1000000,
    quantity: 1,
    size: Size.SMALL,
  },
  {
    id: 2,
    name: "Product B",
    image:
      "https://asset.kompas.com/crops/Ahi6gSzfV4IpyW-ifHb3F2nSGQU=/3x27:921x640/1200x800/data/photo/2022/09/09/631aa84b385fd.jpg",
    price: 150000,
    quantity: 1,
    size: Size.MEDIUM,
  },
  {
    id: 3,
    name: "Product C",
    image:
      "https://asset.kompas.com/crops/Ahi6gSzfV4IpyW-ifHb3F2nSGQU=/3x27:921x640/1200x800/data/photo/2022/09/09/631aa84b385fd.jpg",
    price: 200000,
    quantity: 1,
    size: Size.LARGE,
  },
];

export async function GET() {
  return NextResponse.json(cartItems, { status: 200 });
}
