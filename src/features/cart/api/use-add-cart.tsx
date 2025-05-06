import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AddCartPayload {
  cartId: number;
  quantity?: number;
}

interface UseAddCartProps {
  onSuccess?: () => void;
  onError?: (e: Error) => void;
}

export const UseAddCart = ({ onSuccess, onError }: UseAddCartProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cartId, ...payload }: AddCartPayload) => {
      const { data } = await axiosInstance.post(
        `/api/carts/${cartId}`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      onSuccess?.();
    },
    onError,
  });
};
