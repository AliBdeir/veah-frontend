import { create } from "zustand";
import { DefaultUserInput, UserInput } from "../types/types";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  state: UserInput;
  success: boolean;
  setState: (state: UserInput) => void;
  setSuccess: (success: boolean) => void;
};

const usePersistedState = create<State>()(
  persist(
    (set, get) => ({
      state: DefaultUserInput,
      success: false,
      setState: (state: UserInput) => set({ success: get().success, state }),
      setSuccess: (success: boolean) => set({ success, state: get().state }),
    }),
    {
      name: "user-input",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        state: state.state,
      }),
    }
  )
);

export default usePersistedState;
