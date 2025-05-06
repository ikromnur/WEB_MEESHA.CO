"use client";

import Image from "next/image";
import React, { useState } from "react";
import banner from "../../../../public/banner-3.png";
import product from "../../../../public/product-thumbnail-2.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Pagination from "@/components/container/pagination";
import { useUpdateSearchParams } from "@/hooks/use-search-params";
import { ProductFilterForm } from "@/features/products/components/filter-product";
import { CardProduct } from "@/features/products/components/card-product";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiSearch } from "react-icons/ci";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Bouquet Mawar Merah",
    description: "Bouquet cantik dengan mawar merah segar",
    price: 150000,
    image: product,
  },
  {
    id: 2,
    name: "Bouquet Bunga Campur",
    description: "Kombinasi bunga segar, cocok untuk hadiah",
    price: 175000,
    image: product,
  },
  {
    id: 3,
    name: "Bouquet Mawar Putih",
    description: "Elegan dan minimalis, cocok untuk acara resmi",
    price: 160000,
    image: product,
  },
];

const ProductsPage = () => {
  const { params, updateParams } = useUpdateSearchParams();
  const [page, setPage] = useState<number>(Number(params.page) || 1);

  const handlePageChange = (page: number) => {
    setPage(page);
    updateParams({ page: page.toString() });
  };

  return (
    <div className="pt-4 w-full max-w-screen-xl mx-auto px-4">
      <div className="relative mb-8">
        <Image
          className="w-full min-h-52 object-cover rounded-lg"
          src={banner}
          width={1170}
          height={393}
          alt="banner"
        />
        <h1 className="text-white font-semibold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md text-center w-full">
          Flowers in stylish disguise
        </h1>
      </div>
      <div className="flex justify-between gap-4">
        <section className="max-w-96 w-full hidden lg:block p-3">
          <ProductFilterForm />
        </section>
        <section className="flex-1 flex flex-col">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="mb-8 w-full justify-between px-1 h-12 max-w-md ml-auto lg:hidden"
                size={"lg"}
              >
                <div className="flex items-center gap-1.5 ml-2">
                  <CiSearch />
                  <span className="text-[#a5a5a5] font-normal">
                    Cari bunga favoritmu...
                  </span>
                </div>
                <div className="bg-primary px-3 py-2 text-white rounded-md">
                  Cari
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side={"top"} className="overflow-y-auto h-full">
              <div className="max-w-md mx-auto">
                <SheetTitle>Cari Bouquet</SheetTitle>
                <Separator className="mt-2 mb-4" />
                <ProductFilterForm />
              </div>
            </SheetContent>
          </Sheet>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 ">
            {products.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
          </div>
          <Separator className="my-8" />
          <Pagination
            page={page}
            setPage={handlePageChange}
            totalPages={4}
            className="justify-center md:justify-start"
          />
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
