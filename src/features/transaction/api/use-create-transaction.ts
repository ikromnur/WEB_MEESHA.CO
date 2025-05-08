import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface CreateTransactionPayload {
  date: Date;
  time: string;
  name: string;
  email: string;
  phone: string;
  cart: {
    product_id: string;
    quantity: number;
    size?: string;
    price: number;
  }[];
}

interface UseCreateTransactionProps {
  onSuccess?: () => void;
  onError?: (e: Error) => void;
}

export const UseCreateTransaction = ({
  onSuccess,
  onError,
}: UseCreateTransactionProps) => {
  return useMutation({
    mutationFn: async (payload: CreateTransactionPayload) => {
      const { data } = await axiosInstance.post(`/api/transaction`, payload);
      return data;
    },
    onSuccess,
    onError,
  });
};
