import { Workout } from "@/types/workout";

// Main API first, alternative API as backup
const BASE_URLS = [
  "https://api.abcz.workers.dev/api/fitlog",
  "https://api.api-store.workers.dev/api/fitlog",
];

async function fetchFromApi<T>(path = ""): Promise<T> {
  for (const baseUrl of BASE_URLS) {
    try {
      const res = await fetch(baseUrl + path, { cache: "no-store" });
      if (res.ok) {
        return (await res.json()) as T;
      }
    } catch {
      // this API failed, try the next one
    }
  }
  throw new Error("Could not load data from the API");
}

export function getWorkouts() {
  return fetchFromApi<Workout[]>();
}

export async function getWorkout(id: string) {
  try {
    return await fetchFromApi<Workout>(`/${id}`);
  } catch {
    return null; // details page will show 404
  }
}
