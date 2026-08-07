import { apiRequest } from "./api";

export interface SOSRequest {
  id: number;
  name: string;
  location: string;
  priority: string;
  status: string;
}

export async function getSOSRequests(): Promise<SOSRequest[]> {
  return apiRequest("/sos");
}

export async function createSOSRequest(data: {
  name: string;
  location: string;
  priority: string;
}) {
  return apiRequest("/sos", {
    method: "POST",
    body: JSON.stringify(data),
  });
}