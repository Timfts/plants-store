import wait from "../helpers/wait";
import Plant from "../entities/Plant";

/**
 * @typedef {"no" | "low" | "high"} Sunlight
 * @typedef {"rarely" | "regularly" | "daily"} Water
 * @typedef {"true" | "false"} Chew
 */

/**
 * @param {{ sunlight: Sunlight, water: Water, chew: Chew }} options - The options for filtering plants.
 * @returns {Promise<Plant[]>}
 */
export default async function getPlantsList({ sunlight, water, chew }) {
  const randomResponse = Math.floor(Math.random() * 3) + 1;
  await wait(800);
  const res = await fetch(`/api/example-${randomResponse}.json`);
  const rawItems = res.status === 404 ? [] : await res.json();
  return rawItems.map((item) => new Plant(item));
}
