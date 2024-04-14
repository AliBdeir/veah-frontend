import { useMutation } from "@tanstack/react-query";
import { UserInput } from "../types/types";
import { CallService } from "../services/call-service";

const useCall = () => {
  return useMutation({
    mutationKey: ["call"],
    mutationFn: (input: UserInput) => CallService.Call(input),
  });
};

export default useCall;
