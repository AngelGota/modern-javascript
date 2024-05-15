// Funciones
// No se recomienda:
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
// Como se deberia hacer:
const saludar2 = function (nombre) {
  return `Hola, ${nombre}`;
};
// Function de flecha o Lambda:
const saludar3 = (nombre) => {
  return `Hola, ${nombre}`;
};
// Lo mismo pero simplificado:
const saludar4 = (nombre) => `Hola, ${nombre}`;
// Lo mismo pero sin parametros:
const saludar5 = () => `Hola, Mundo`;

console.log(saludar("Angelo"));
console.log(saludar2("Smith"));
console.log(saludar3("Gomez"));
console.log(saludar4("Tapia"));
console.log(saludar5());

// cuando en la function lambda se necesita especificar
// que es un objeto:
const getUser = () => {
  return {
    uid: "ABC123",
    username: "Angel_Gom123",
  };
};

// lo mismo pero sin return:
const getUserInstance = () => ({
  uid: "DEF456",
  username: "Smith_Tapia123",
});

const user = getUser();
const user2 = getUserInstance();

console.log(user);
console.log(user2);

// Practica
// Transformar a function lambda
function getUsuarioActivo(nombre) {
  return {
    uid: "ABC678",
    username: nombre,
  };
}

const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC678",
  username: nombre,
});

const uActivo = getUsuarioActivo("Angelo");
const uActivo2 = getUsuarioActivo2("Angelo");

console.log(uActivo);
console.log(uActivo2);
