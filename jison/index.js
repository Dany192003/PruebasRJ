var parser = require('./gramatica');

// Define tu cadena de entrada aquí
var inputString = `Evaluar[3^2];`; // Reemplaza con el contenido que deseas analizar

// Procesa la cadena de entrada
parser.parse(inputString);
