// Desestructuracion
// Asignacion desesctructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const noContext = ({ nombre, edad, clave }) => {
  //   console.log(nombre, edad);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1231,
      lng: -12.2376,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = noContext(persona);
// const { lat, lng } = latlng;
console.log(nombreClave, anios, lat, lng);
