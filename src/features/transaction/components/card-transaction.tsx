"use client";

import { Badge } from "@/components/ui/badge";
import { Order } from "@/types/order";
import Image from "next/image";
import productThumbnail from "../../../../public/product-thumbnail.png";

const CardTransaction = ({ order }: { order: Order }) => {
  const badgeColor =
    {
      Selesai: "bg-green-600 text-white",
      Pending: "bg-yellow-500 text-white",
      Dibatalkan: "bg-red-600 text-white",
    }[order.statusPesanan] || "bg-gray-400 text-white";

  return (
    <div className="py-4 border-t border-b flex items-center justify-between">
      <div className="flex items-center gap-3 w-full">
        <div className="w-[20vw] h-auto max-w-[115px] max-h-[115px] flex-shrink-0">
          <Image
            src={productThumbnail}
            alt={order.productName}
            width={115}
            height={115}
            className="w-full h-full object-cover aspect-square rounded"
          />
        </div>

        <div className="flex flex-col justify-between h-24 sm:h-[115px] py-1 flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <h4 className="font-semibold truncate">{order.productName}</h4>
            <span className="text-gray-500 text-xs sm:text-sm flex-shrink-0">
              {order.date}
            </span>
          </div>
          <p className="text-sm break-words">
            <span>Rp{order.price.toLocaleString("id-ID")}</span> -{" "}
            <span>{order.paymentMethod}</span> -{" "}
            <span
              className={
                order.statusPembayaran === "Lunas"
                  ? "text-green-600"
                  : order.statusPembayaran === "Gagal"
                  ? "text-red-600"
                  : "text-yellow-600"
              }
            >
              {order.statusPembayaran.toUpperCase()}
            </span>
          </p>
          <span className="text-sm">x{order.quantity}</span>
        </div>
      </div>

      <Badge className={`${badgeColor} flex-shrink-0 ml-4`}>
        {order.statusPesanan}
      </Badge>
    </div>
  );
};

export default CardTransaction;
