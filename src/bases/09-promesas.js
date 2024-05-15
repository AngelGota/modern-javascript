import { getHeroById } from "./bases/08-imp-exp.js";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // const heroe = getHeroById(2);

//     const heroe = getHeroById(2);
//     resolve(heroe);
//     // reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Promise sucessfully :)");
//     console.log("Encontramos al heroe:", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id);
      if (heroe) {
        resolve(console.log("Searched: ", heroe));
      } else {
        reject("No exists heroe id.");
      }
    }, 2000);
  });
};

getHeroByIdAsync(4).then().catch(console.warn);
