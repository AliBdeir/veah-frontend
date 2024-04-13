export type ButtonItem = {
  btn_id: string;
  label: string;
  emoji: string;
  colour: string;
};

export type UserInput = {
  address: string;
  emergencyInformation: string;
  emergencyContacts: EmergencyContact[];
  healthInformation: HealthInformation;
};

export type EmergencyContact = {
  name: string;
  phone: string;
  email: string;
  relationship: string;
}; // Health types

export type HealthInformation = {
  bloodType: string;
  allergies: string[];
  medications: string[];
  conditions: string[];
};
