import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateCartPayload {
  cartId: number;
  quantity?: number;
  size?: string;
}

interface UseUpdateCartProps {
  onSuccess?: () => void;
  onError?: (e: Error) => void;
}

export const UseUpdateCart = ({ onSuccess, onError }: UseUpdateCartProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cartId, ...payload }: UpdateCartPayload) => {
      const { data } = await axiosInstance.patch(
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
