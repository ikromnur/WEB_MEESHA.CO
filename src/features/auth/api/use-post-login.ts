import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { LoginFormSchema } from "@/features/auth/form/login";

// Definisikan tipe respons yang benar
type UsePostLoginResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  };
};

type UsePostLoginProps = {
  onSuccess: (data: UsePostLoginResponse) => void; // Ubah tipe data onSuccess
  onError: (e: Error) => void;
};

export const UsePostLogin = ({ onSuccess, onError }: UsePostLoginProps) => {
  return useMutation({
    mutationFn: async (payload: LoginFormSchema) => {
      // Kirim permintaan ke API login
      const { data } = await axiosInstance.post("/auth/login", payload);
      return data; // Pastikan data yang diterima sesuai dengan tipe UsePostLoginResponse
    },
    onSuccess, // Panggil onSuccess ketika mutasi berhasil
    onError, // Panggil onError ketika terjadi kesalahan
  });
};
