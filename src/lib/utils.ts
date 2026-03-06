import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number | null | undefined) {
  if (value == null) return "0";
  return new Intl.NumberFormat("en-US").format(value);
}

export function formatPercent(value: number | null | undefined) {
  if (value == null) return "0%";
  return `${Math.round(value)}%`;
}

export function formatDateTime(value: string | null | undefined) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString();
}

export function formatPhone(phone: string | null | undefined) {
  if (!phone) return "—";
  return phone;
}
