import { Workout } from "@/types/workout";

export type SortOption = "duration" | "calories" | "rating";

// Duration: shortest first. Calories and rating: highest first.
export function sortWorkouts(list: Workout[], sortBy: SortOption): Workout[] {
  const copy = [...list];

  if (sortBy === "duration") {
    return copy.sort((a, b) => a.duration - b.duration);
  }
  if (sortBy === "calories") {
    return copy.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
  }
  return copy.sort((a, b) => b.rating - a.rating);
}
