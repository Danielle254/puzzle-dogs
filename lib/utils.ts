import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { DogDetailsType, Gender, Status } from "@/app/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateAge(dob: string): string {
  const dobAsDate = new Date(dob);
  const today = new Date();

  // Check for invalid date (e.g., "2024-99-99")
  if (isNaN(dobAsDate.getTime())) {
    return "Error calculating age";
  }

  // 2. Calculate the base difference in years
  let age = today.getFullYear() - dobAsDate.getFullYear();

  // 3. Get the month and day differences
  const monthDifference = today.getMonth() - dobAsDate.getMonth();
  const dayDifference = today.getDate() - dobAsDate.getDate();

  // 4. Adjust if the birthday hasn't passed this year yet (Key logic)
  // If current month is earlier, OR same month but current day is earlier.
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  // 5. Handle cases where the DOB is in the future
  if (age < 0) {
    return "Error: Date in Future";
  }

  // 6. Return the age as a string
  return age.toString();
}

export function truncateText(text: string) {}
