// Función Area
export function area(largo, ancho) {
    let rectanguloarea = largo * ancho;
    console.log('El área del rectángulo es ' + rectanguloarea + 'unidad cuadrada');
}

// Función perimetro
export function perimetro(largo, ancho) {
    let rectanguloperimetro = 2 * (largo + ancho);
    console.log('El perímetro del rectángulo es' + rectanguloperimetro + 'unidad(es)');
}