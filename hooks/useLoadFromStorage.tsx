import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from "react-hook-form";
import { UserInput } from "../types/types";

// Custom hook to load form data
export default function useLoadFromStorage() {
  const [newData, setNewData] = useState<UserInput | null>(null);
  const form = useForm<UserInput>();

  useEffect(() => {
    const loadFormData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("formData");
        if (savedData !== null) {
          const parsedData = JSON.parse(savedData);
          console.log("Recovered saved data:", parsedData);
          form.reset(parsedData); // Reset the form with saved data
          setNewData(parsedData); // Save loaded data to state
        }
      } catch (error) {
        console.error("Error loading data", error);
      }
    };

    loadFormData();
  }, []);

  return { newData, form };
}
