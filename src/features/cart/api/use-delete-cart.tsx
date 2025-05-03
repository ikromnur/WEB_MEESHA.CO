import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseDeleteCartProps {
  onSuccess?: () => void;
  onError?: (e: Error) => void;
}

export const UseDeleteCart = ({ onSuccess, onError }: UseDeleteCartProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (cartId: number) => {
      const { data } = await axiosInstance.delete(`/api/carts/${cartId}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      onSuccess?.();
    },
    onError,
  });
};
