import { create } from "zustand";
import { DefaultUserInput, UserInput } from "../types/types";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type State = {
  state: UserInput;
  setState: (state: UserInput) => void;
};

const usePersistedState = create<State>()(
  persist(
    (set) => ({
      state: DefaultUserInput,
      setState: (state: UserInput) => set({ state }),
    }),
    {
      name: "user-input",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default usePersistedState;
