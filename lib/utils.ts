import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { DogDetailsType, Gender, Status } from "@/app/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterData(
  data: DogDetailsType[],
  filterGender: Gender,
  filterStatus: Status
) {
  return data.filter(
    (dog) => dog.gender === filterGender && dog.status === filterStatus
  );
}

export function calculateAge(dob: string) {}

export function truncateText(text: string) {}
