import { apiRequest } from "./api";

export interface ReliefCamp {
  id: number;
  name: string;
  location: string;
  occupancy: number;
  capacity: number;
  food_stock: string;
  water_supply: string;
  medical_team: string;
  status: string;
}

export async function getCamps(): Promise<ReliefCamp[]> {
  return apiRequest("/camps");
}