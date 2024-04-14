import { UserInput } from "../types/types";
import axios from "axios";

type CallServiceType = Omit<UserInput, "address" | "healthInformation"> & {
  address: string;
  healthInformation: {
    bloodType: string;
    allergies: string[];
    medications: string[];
    conditions: string[];
  };
};

class CallServiceClass {
  baseUrl = "https://veah-backend.onrender.com";
  Call = async (input: UserInput) => {
    const callInput: CallServiceType = {
      ...input,
      address: `${input.address.addressLn1}, ${input.address.addressLn2}, ${input.address.city}, ${input.address.state}, ${input.address.zip}`,
      healthInformation: {
        bloodType: input.healthInformation.bloodType,
        allergies: input.healthInformation.allergies.map((allergy) => allergy.value),
        medications: input.healthInformation.medications.map((medication) => medication.value),
        conditions: input.healthInformation.conditions.map((condition) => condition.value),
      },
    };
    return (
      await axios.post<{ sessionId: string }>(`${this.baseUrl}/call`, {
        predefinedInformation: callInput,
      })
    ).data;
  };
}

export const CallService = new CallServiceClass();
