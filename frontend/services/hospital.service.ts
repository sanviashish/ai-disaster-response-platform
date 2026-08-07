import { apiRequest } from "./api";

export interface Hospital {
  id: number;
  name: string;
  available_beds: number;
  oxygen: boolean;
  location: string;
}

export async function getHospitals(): Promise<Hospital[]> {
  return apiRequest("/hospitals");
}