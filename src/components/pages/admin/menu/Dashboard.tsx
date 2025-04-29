// src/components/pages/admin/menu/Dashboard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Trash2 } from "lucide-react";

const orders = [
  {
    id: 1,
    title: "Bouquet - 1",
    description: "Rangkaian bunga padat yang cantik, pilihan tepat untuk berbagai momen istimewa.",
    price: "Rp.50.000",
    stock: 10,
    image: "/bouquet1.jpg",
  },
  {
    id: 2,
    title: "Bouquet - 2",
    description: "Hiasan bunga yang mempercantik tampilan kue, cocok untuk acara spesial.",
    price: "Rp.50.000",
    stock: 10,
    image: "/bouquet2.jpg",
  },
  {
    id: 3,
    title: "Bouquet - 3",
    description: "Ilustrasi bunga digital yang unik dan modern, bisa jadi hadiah virtual.",
    price: "Rp.50.000",
    stock: 10,
    image: "/bouquet3.jpg",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Dashboard Anda hari ini
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Halo Meesha, Selamat datang kembali 👋🏻
        </p>
      </header>

      {/* Statistik */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Produk Terjual" value="25.1k" change="+1.5%" note="View Report" />
        <StatCard title="Total Profit" value="$2,435k" change="-3.5%" note="View Report" />
        <StatCard title="Total No. of Claim" value="3.5M" change="+1.5%" note="View Report" />
        <StatCard title="New Customer" value="43.5k" change="+10%" note="View More" />
      </section>

      {/* Pesanan Hari Ini */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Pesanan hari ini</h2>
          <button className="flex items-center gap-2 text-gray-600 hover:text-black transition text-sm">
            <ArrowRight className="w-5 h-5" />
            Lihat semua
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {orders.map((order) => (
            <div
              key={order.id}
              className="min-w-[250px] max-w-[270px] bg-pink-100 rounded-xl p-3 shadow-sm flex-shrink-0"
            >
              <Image
                src={order.image}
                width={250}
                height={150}
                alt={order.title}
                className="rounded-lg mb-2 object-cover w-full h-auto"
              />
              <div className="text-sm font-semibold">{order.title}</div>
              <div className="text-xs text-gray-500">Stok {order.stock}</div>
              <p className="text-sm mt-1 text-gray-700 line-clamp-3">{order.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-base">{order.price}</span>
                <div className="flex gap-2">
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  note,
}: {
  title: string;
  value: string;
  change: string;
  note: string;
}) {
  const isPositive = change.startsWith("+");

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm">
      <div className="text-sm font-medium text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
      <div
        className={`text-xs mt-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
      >
        {change}
      </div>
      <div className="text-xs text-blue-600 mt-1 underline cursor-pointer">{note}</div>
    </div>
  );
}
