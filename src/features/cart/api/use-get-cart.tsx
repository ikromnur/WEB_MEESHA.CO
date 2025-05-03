import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UseGetCartProps {
  onError: (e: Error) => void;
}

export const UseGetCart = ({ onError }: UseGetCartProps) => {
  return useQuery({
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get("/carts");
        return data;
      } catch (error) {
        onError(error as Error);
        console.error(error);
        throw error;
      }
    },
    queryKey: ["cart"],
  });
};
