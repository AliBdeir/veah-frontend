import { useMutation } from "@tanstack/react-query";
import { UserInput } from "../types/types";
import { CallService } from "../services/call-service";

const useCall = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: ["call"],
    mutationFn: (input: UserInput) => CallService.Call(input),
    onSuccess,
  });
};

export default useCall;
