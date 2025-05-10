import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { ContactFormValues } from "../form/contact";

interface UseCreateMessageProps {
  onSuccess?: () => void;
  onError?: (e: Error) => void;
}

export const UseCreateMessage = ({
  onSuccess,
  onError,
}: UseCreateMessageProps) => {
  return useMutation({
    mutationFn: async (payload: ContactFormValues) => {
      const { data } = await axiosInstance.post("/messages", payload);
      return data;
    },
    onSuccess,
    onError,
  });
};
