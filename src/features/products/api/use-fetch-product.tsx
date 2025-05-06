import { axiosInstance } from "@/lib/axios";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

interface UseFetchProductProps {
  id: number;
  onError?: (e: Error) => void;
}

export const UseFetchProduct = ({ id, onError }: UseFetchProductProps) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<Product>(`/products/${id}`);
        return data;
      } catch (error) {
        if (onError && error instanceof Error) {
          onError(error);
        }
        console.error(error);
        throw error;
      }
    },
    enabled: !!id,
  });
};
