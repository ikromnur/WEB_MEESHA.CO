import { NextResponse } from "next/server";

// Dummy image path (di real case ini biasanya pakai URL image atau dynamic import)
const productImage = "/product-image.png";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Kamu bisa ganti ini nanti dengan fetch dari DB
  const product = {
    id: 1,
    name: "Bouquet Mawar Merah",
    description:
      "Tampil cantik dan memikat, buket ini memadukan nuansa ungu, pink, dan putih yang harmonis. Dirangkai dengan elegan",
    size: "LARGE",
    variant: [
      "Chrysanthemum (various colors)",
      "Gerbera (various colors)",
      "Pink Carnation",
      "Baby's Breath (Gypsophila)",
    ],
    price: 150000,
    image: productImage,
  };

  // Check apakah id-nya cocok
  if (Number(id) !== product.id) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
