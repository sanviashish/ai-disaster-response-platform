import { apiRequest } from "./api";

export interface Resource {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  percentage: number;
  status: string;
}

export async function getResources(): Promise<Resource[]> {
  return apiRequest("/resources");
}