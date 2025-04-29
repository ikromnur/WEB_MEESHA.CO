'use client';

import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'; // Import komponen Dialog dari ShadCN UI
import { useRouter } from 'next/navigation'; // ✅ Correct import for App Router

interface Product {
  id: number;
  name: string;
}

const AdminProduk = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State untuk mengatur dialog
  const [judul, setJudul] = useState('');
  const [gambar, setGambar] = useState<File | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch data produk dari backend
    fetch('http://localhost:3001/api/products')  // Pastikan URL mengarah ke backend yang benar
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  // Cek data yang diterima
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching data:", err));  // Menangani jika ada error saat fetching
  }, []);

  // Fungsi untuk menambahkan produk
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', judul);
    if (gambar) formData.append('image', gambar);

    await fetch('http://localhost:3001/api/products', {  // Mengirim produk ke backend
      method: 'POST',
      body: formData,
    });

    // Reload data produk dan tutup dialog setelah menambahkan
    setIsDialogOpen(false);
    router.push('/admin/menu/produk');  // Arahkan ke halaman produk di frontend, bukan API
  };

  // Fungsi untuk menghapus produk
  const handleDelete = async (productId: number) => {
    const response = await fetch(`http://localhost:3001/api/products/${productId}`, { // Pastikan mengarah ke port 3001
      method: 'DELETE',
    });

    if (response.ok) {
      // Update state produk setelah dihapus
      setProducts(products.filter((product) => product.id !== productId));
    } else {
      alert("Gagal menghapus produk");
    }
  };

  return (
    <div className="p-4">
      <header className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Produk
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Halo Meesha, Selamat datang kembali 👋🏻
        </p>
        <h1 className="text-xl my-4 font-bold">Kategori Produk</h1>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white border-2 border-pink-300 rounded-lg shadow p-4 text-center">
            <div className="h-32 bg-pink-100 rounded mb-2"></div> {/* Placeholder image */}
            <h2 className="text-lg font-bold text-pink-800">{product.name}</h2>

            <div className="flex justify-center space-x-2 mt-3">
              <Link href={`/admin/menu/produk/edit/${product.id}`} passHref>
                <button className="text-blue-600 flex items-center">
                  <Edit size={18} className="mr-1" /> Edit
                </button>
              </Link>
              <button 
                onClick={() => handleDelete(product.id)}
                className="text-red-500 flex items-center"
              >
                <Trash size={18} className="mr-1" /> Hapus
              </button>
            </div>
          </div>
        ))}

        {/* Tombol tambah kategori baru yang menampilkan dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div
              className="border-2 border-dashed border-pink-300 rounded-lg flex items-center justify-center h-48 text-pink-500 cursor-pointer hover:bg-pink-50"
              onClick={() => setIsDialogOpen(true)} // Open dialog saat tombol ditekan
            >
              <Plus size={36} />
            </div>
          </DialogTrigger>

          {/* Dialog untuk menampilkan form */}
          <DialogContent className="p-6">
            <DialogTitle className="text-xl font-bold">Tambah Kategori Produk</DialogTitle>

            {/* Form untuk menambahkan produk baru */}
            <div className="mt-6">
              <div className="mb-4">
                <label className="block text-m font-medium mb-1">Tambahkan Gambar</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setGambar(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0 file:text-sm file:font-semibold
                  file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-m font-medium mb-1">Judul</label>
                <input
                  type="text"
                  placeholder="Tambahkan Judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-pink-400"
                />
              </div>
            </div>

            <DialogFooter className="mt-4">
              <DialogClose
                asChild
                onClick={() => setIsDialogOpen(false)} // Tutup dialog tanpa menyimpan
                className="px-4 py-2 bg-gray-300 text-black rounded"
              >
                Batalkan
              </DialogClose>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-pink-400 text-white rounded"
              >
                Simpan
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminProduk;
