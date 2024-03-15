// 2- ACCESO A DATOS EN BUCLES MULTI-DIMENSIONALES
// Tienes estos dos arrays:

// const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];

// const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];

// Imprime en consola o pantalla:

// - El número 26, el numero 134, el numero 92

// - El nombre "Rosa", el nombre "Roberto"

// - Todos los nombres de mascotas, a) en una línea y b) en diferentes líneas

const medidas = [[175, 134], 165, [80, 187, [73,26], 92]];

const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];
console.log(nombres);

// Impresion del numero 26:

console.log(medidas[2][2][1]);

// Impresion del numero 134:

console.log(medidas[0][1]);

// Impresion del numero 92:

console.log(medidas[2][3]);

// Impresion de los nombres de mascotas en una línea

const nombresMascotas = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];
const nombresMascotasFlat = nombresMascotas.flat();
console.log(nombresMascotasFlat);

// Impresion de los nombres de mascotas en diferentes líneas

for (let i=0; i<nombresMascotasFlat.length; i++){
    console.log(nombresMascotasFlat[i]);
}