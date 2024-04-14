import { useMutation } from "@tanstack/react-query";
import { UserInput } from "../types/types";
import { CallService } from "../services/call-service";
import usePersistedState from "./state";

const useCall = (onSuccess: () => void) => {
  const setSession = usePersistedState((x) => x.setSession);
  return useMutation({
    mutationKey: ["call"],
    mutationFn: async (input: UserInput) => await CallService.Call(input),
    onSuccess: ({ sessionId }) => {
      setSession({ id: sessionId, messages: [] });
      onSuccess();
    },
  });
};

export default useCall;
