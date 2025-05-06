import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UseFetchProductsProps {
  onError: (e: Error) => void;
  page?: number;
  filter?: string;
  search?: string;
}

export const UseFetchProducts = ({
  onError,
  page = 1,
  filter = "",
  search = "",
}: UseFetchProductsProps) => {
  return useQuery({
    queryKey: ["products", page, filter, search],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get("/products", {
          params: { page, filter, search },
        });
        return data;
      } catch (error) {
        onError(error as Error);
        console.error(error);
        throw error;
      }
    },
  });
};
