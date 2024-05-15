// import { heroes } from "./data/heroes.js";
import heroes, { owners } from "../data/heroes.js"; // imp snipet

// Forma 1
// const getHeroById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// Resumido 1
// const getHeroById = (id) => {
//   return heroes.find((heroe) => heroe.id === id);
// };

// Resumido 2
const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroById(2));

const getHeroByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroByOwner("DC"));
// console.log(getHeroByOwner("Marvel"));

// console.log(owners);

export { getHeroById, getHeroByOwner };
