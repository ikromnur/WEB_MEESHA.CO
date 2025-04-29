"use client";

import React from "react";
import { Trash2 } from "lucide-react"; // Mengimpor ikon Trash dari Lucide React
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function PesananSidebar({
  collapsible,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="w-80 p-4 bg-white shadow-md ml-auto"> {/* Menempatkan Sidebar di kanan */}
      <SidebarHeader>
        <h2 className="text-lg font-semibold">Riwayat Pesanan</h2>
        <input
          type="text"
          placeholder="Cari Riwayat List"
          className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </SidebarHeader>
      <SidebarContent className="mt-4">
        <div className="space-y-4">
          {/* Bagian Riwayat Maret */}
          <div>
            <h3 className="text-sm text-gray-500">Maret, 21, 2024</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-orange-600">Bouquet - 4</span>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} /> {/* Ikon Sampah */}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-orange-600">Bouquet - 1</span>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} /> {/* Ikon Sampah */}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-orange-600">Bouquet - 3</span>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} /> {/* Ikon Sampah */}
                </button>
              </div>
            </div>
          </div>

          {/* Bagian Riwayat Februari */}
          <div>
            <h3 className="text-sm text-gray-500">Februari, 21, 2024</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-orange-600">Simple Bouquet - 1</span>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} /> {/* Ikon Sampah */}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-orange-600">Cake Flower - 1</span>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} /> {/* Ikon Sampah */}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-orange-600">Simple Bouquet - 3</span>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} /> {/* Ikon Sampah */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
