import { apiRequest } from "./api";

export interface RescueTeam {
  id: number;
  team: string;
  members: number;
  status: string;
  location: string;
}

export async function getTeams(): Promise<RescueTeam[]> {
  return apiRequest("/teams");
}