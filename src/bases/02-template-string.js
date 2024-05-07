const nombre = "Angelo";
const apellido = "Gomez";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola Mundo, soy: " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
