export type ButtonItem = {
  btn_id: string;
  label: string;
  emoji: string;
  colour: string;
};

export type UserInput = {
  address: {
    addressLn1: string;
    addressLn2: string;
    city: string;
    state: string;
    zip: string;
  };
  emergencyInformation: string;
  emergencyContacts: EmergencyContact[];
  healthInformation: HealthInformation;
  age: number;
  name: string;
  sex: string;
};

export type EmergencyContact = {
  name: string;
  phone: string;
  email: string;
  relationship: string;
}; // Health types

export type Item = {
  id: string;
  value: string;
};

export type HealthInformation = {
  bloodType: string;
  allergies: Item[];
  medications: Item[];
  conditions: Item[];
};

export const DefaultUserInput: UserInput = {
  address: {
    addressLn1: "",
    addressLn2: "",
    city: "",
    state: "",
    zip: "",
  },
  emergencyInformation: "",
  age: 0,
  emergencyContacts: [],
  healthInformation: {
    bloodType: "",
    allergies: [],
    medications: [],
    conditions: [],
  },
  name: "",
  sex: "Male",
};
