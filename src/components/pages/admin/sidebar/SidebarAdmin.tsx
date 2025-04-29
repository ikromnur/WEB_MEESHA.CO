"use client";

import React from "react";
import {
  LayoutDashboard,
  Flower,
  BookOpenCheck,
  Megaphone,
  BadgePercent,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

import Image from "next/image";
import logomeeshatext from "../../../../../public/logomeeshatext.svg";

import { NavMain } from "@/components/pages/admin/sidebar/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const menuAtas = [
  { title: "Dashboard", url: "/admin/menu/dashboard", icon: LayoutDashboard },
];

const menuTengah = [
  { title: "Produk", url: "/admin/menu/produk", icon: Flower },
  { title: "Pesanan", url: "/admin/menu/pesanan", icon: BookOpenCheck },
  { title: "Pengumuman", url: "#", icon: Megaphone },
  { title: "Diskon", url: "#", icon: BadgePercent },
  { title: "Notifikasi", url: "#", icon: Bell },
];

const menuBawah = [
  { title: "Pengaturan", url: "/admin/settings", icon: Settings },
  { title: "Keluar", url: "/", icon: LogOut },
];

export function AppSidebar({
  collapsible,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-white text-gray-800 shadow-md" collapsible="icon" {...props}>
      {/* Logo */}
      <SidebarHeader className="flex flex-col items-center justify-center p-6 bg-white">
        <Image
          src={logomeeshatext}
          className="w-32 h-auto"
          width={200}
          height={100}
          alt="logomeeshatext"
        />
      </SidebarHeader>

      {/* Menu utama */}
      <SidebarContent className="flex flex-col w-full space-y-2 px-2 bg-white">
        <NavMain items={menuAtas} />
      </SidebarContent>

      {/* Menu tengah */}
      <SidebarContent className="flex flex-col w-full mt-3 px-2 space-y-2 border-t pt-2 bg-white">
        <NavMain items={menuTengah} />
      </SidebarContent>

      {/* Menu bawah */}
      <SidebarContent className="w-full mt-3 px-2 space-y-2 border-t pt-2 bg-white">
        <NavMain items={menuBawah} />
      </SidebarContent>

      <SidebarFooter className="hidden" />
      <SidebarRail />
    </Sidebar>
  );
}
