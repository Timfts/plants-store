import Plant from "../entities/Plant";

/** @returns {Promise<Plant[]>} */
export default function getPlantsList({ sunlight, water, chew }) {
  return fetch(
    `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunlight}&water=${water}&pets=${chew}`
  )
    .then((res) => {
      if (res.status === 404) {
        return [];
      } else return res.json();
    })
    .then((data = []) => {
      return data.map((plantRaw) => new Plant(plantRaw));
    })
    .catch(console.error);
}
