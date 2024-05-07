const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 10001,
    latitud: 14.0893,
    longitud: 14.0893,
  },
};

// console.table(persona);
console.log(persona);
// No se hace esto: Mutacion de instancia - Falso+
const persona2 = persona;
persona2.nombre = "Peter";
console.log(persona2);
console.log(persona);
// -------------------------

// la forma correcta:
// Nuevo objeto
const persona3 = { ...persona };
persona3.nombre = "Angelo";

console.log(persona3);
