const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p1] = personajes;
console.log(p1);

const returnArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const thisState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo: ");
    },
  ];
};

const [arr, setNombre] = thisState("Goku");
console.log(arr);
setNombre();

// nombre[1]();
