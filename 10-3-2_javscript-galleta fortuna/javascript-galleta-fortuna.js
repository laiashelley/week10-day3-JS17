// 3- LA GALLETA DE LA FORTUNA

// Tienes dos arrays,
// - uno con los nombres de los estudiantes de este curso
// - Y otro con galletas con mensajes de ‘vaticinio’, la cantidad que tú quieras (no hace falta que sea la misma
// cantidad que estudiantes).
// Debes buscar ALEATORIAMENTE un estudiante, y una frase de vaticinio,
// Y mostrar el resultado del tipo:
// "vaticinio para Ferdi:
// Este fin de semana debes de escuchar tus sueños, porque contienen la clave para encontrar un tesoro cerca de tu casa

const nombresCurso = ["Albert", "Francisco", "Juan Carlos", "Los Rifi", "Ferdi", "Carla", "Sergio", "David", "Herman", "Laia"].flat();

const frasesGalletas = [
    "El éxito llegará a tu puerta si perseveras en tus esfuerzos.",
    "La paciencia es la clave para abrir muchas puertas.",
    "La creatividad florecerá en tus proyectos si le das tiempo.",
    "Una sonrisa sincera puede iluminar el día de alguien más.",
    "El aprendizaje es un viaje sin fin hacia la sabiduría.",
    "La suerte favorece a aquellos que trabajan con determinación.",
    "La amabilidad es contagiosa, compártela con el mundo.",
    "Las dificultades de hoy serán las lecciones de mañana.",
    "Mantén tus sueños vivos y pronto se convertirán en realidad.",
    "El amor y la amistad son los tesoros más valiosos de la vida."
].flat();


function fortuna() {
    const nombreAleatorioIndex = Math.floor(Math.random() * nombresCurso.length);
    const fraseAleatoriaIndex = Math.floor(Math.random() * frasesGalletas.length);

    const nombreAleatorio = nombresCurso[nombreAleatorioIndex];
    const fraseAleatoria = frasesGalletas[fraseAleatoriaIndex];

    const mensaje = "Hola, " + nombreAleatorio + ". Tu frase del día es: <br>" + fraseAleatoria;
    
    document.querySelector(".frase").innerHTML = mensaje;
}
