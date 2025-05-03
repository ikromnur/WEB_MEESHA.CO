"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { formatRupiah } from "@/helper/format-rupiah";
import { Badge } from "@/components/ui/badge";

interface CartItemProps {
  image: string | StaticImageData;
  title: string;
  price: number;
  id: number;
  quantity: number;
  size: string;
  deleteCart: (id: number) => void;
  handleChangeQuantity: (id: number, quantity: number) => void;
}

export function CartItem({
  id,
  title,
  image,
  price,
  size,
  quantity,
  deleteCart,
  handleChangeQuantity,
}: CartItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-[20vw] h-auto max-w-[115px] max-h-[115px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={115}
          height={115}
          className="w-full h-full object-cover aspect-square rounded"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="font-medium text-base">{title}</h4>
            <Badge variant={"outline"}>{size}</Badge>
          </div>

          <Button onClick={() => deleteCart(id)} variant="ghost" size="icon">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-2 justify-between">
          <p className="font-semibold">{formatRupiah(price)}</p>

          {/* Add Quantity */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button
              size="sm"
              variant="ghost"
              disabled={quantity === 1}
              onClick={() => handleChangeQuantity(id, quantity - 1)}
            >
              –
            </Button>
            <span className="px-3 text-sm">{quantity}</span>
            <Button
              size="sm"
              variant="ghost"
              disabled={quantity === 10}
              onClick={() => handleChangeQuantity(id, quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
