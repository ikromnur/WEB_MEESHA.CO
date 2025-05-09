import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { RegisterFormSchema } from "@/features/auth/form/register";

type UsePostRegisterProps = {
  onSuccess: () => void;
  onError: (e: unknown) => void;
};

export const UsePostRegister = ({
  onSuccess,
  onError,
}: UsePostRegisterProps) => {
  return useMutation({
    mutationFn: async (form: RegisterFormSchema) => {
      const { data } = await axiosInstance.post("/auth/register", form);
      return data.data;
    },
    onSuccess,
    onError,
  });
};
