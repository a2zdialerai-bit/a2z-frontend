import axios from "axios";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export const TOKEN_KEY = "a2z_token";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(TOKEN_KEY);
}

export const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  full_name: string;
  email: string;
  password: string;
  workspace_name: string;
};

export async function login(payload: LoginPayload) {
  const res = await api.post("/auth/login", payload);
  return res.data;
}

export async function register(payload: RegisterPayload) {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

export async function fetchMe() {
  const res = await api.get("/me");
  return res.data;
}

export async function fetchDashboard() {
  const res = await api.get("/reports/dashboard");
  return res.data;
}

export async function fetchLeadLists() {
  const res = await api.get("/leadlists");
  return res.data;
}

export async function fetchLeads() {
  const res = await api.get("/leads");
  return res.data;
}

export async function fetchPathways() {
  const res = await api.get("/pathways");
  return res.data;
}

export async function fetchCampaigns() {
  const res = await api.get("/campaigns");
  return res.data;
}

export async function fetchCallLogs() {
  const res = await api.get("/calllogs");
  return res.data;
}

export async function fetchAppointments() {
  const res = await api.get("/appointments");
  return res.data;
}

export async function fetchDnc() {
  const res = await api.get("/dnc");
  return res.data;
}
