"use client";

import React from "react";
import { Trash2, ArrowRight } from "lucide-react"; // Mengimpor ikon dari Lucide React
import { Card } from "@/components/ui/card"; // Pastikan Anda sudah membuat komponen card dari ShadCN atau gunakan komponen lain jika perlu
import { Button } from "@/components/ui/button"; // Menggunakan komponen button dari ShadCN

const products = [
  {
    id: 1,
    name: "Bouquet - 1",
    description: "Rangkaian bunga padat yang cantik, pilihan tepat untuk berbagai momen istimewa.",
    price: "Rp.50.000",
    stock: 10,
    imageUrl: "/path/to/image1.jpg", // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 2,
    name: "Bouquet - 2",
    description: "Hiasan bunga yang mempercantik tampilan kue, cocok untuk acara spesial.",
    price: "Rp.50.000",
    stock: 10,
    imageUrl: "/path/to/image2.jpg", // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 3,
    name: "Bouquet - 3",
    description: "Ilustrasi bunga digital yang unik dan modern, bisa jadi hadiah virtual.",
    price: "Rp.50.000",
    stock: 10,
    imageUrl: "/path/to/image3.jpg", // Ganti dengan URL gambar yang sesuai
  },
  // Tambahkan produk lainnya sesuai kebutuhan
];

export default function PesananPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Pesanan</h1>
      <h2 className="text-lg text-gray-600">Hari ini</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-pink-50 p-4 rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <span className="text-sm text-gray-500">Stok {product.stock}</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Button variant="destructive" size="sm">
                  <Trash2 size={16} />
                </Button>
                <Button variant="outline" size="sm" className="text-orange-500">
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button className="mt-6 bg-orange-500 text-white">
        Lihat Pesanan Besok
      </Button>
    </div>
  );
}
