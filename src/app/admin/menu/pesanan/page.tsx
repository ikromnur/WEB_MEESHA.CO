import Pesanan from "@/components/pages/admin/menu/produk/pesanan/PesananPage";
import { PesananSidebar } from "@/components/pages/admin/menu/produk/pesanan/pesananSidebar"

export default function PesananPage() {
  return (
    <div className="flex justify-between">
      <div className="flex-grow mr-4">
        {/* Konten Pesanan */}
        <Pesanan />
      </div>

      <div className="relative h-32 w-32 ... ">
        {/* Sidebar di sebelah kanan */}
        
      </div>
    </div>
  );
}
