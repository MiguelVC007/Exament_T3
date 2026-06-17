function registrarProyecto(nombre, inversion) {
    return {
        nombre,
        inversion
    };
}

function calcularTotalInversion(proyectos) {
    return proyectos.reduce(
        (total, proyecto) => total + proyecto.inversion,
        0
    );
}

function obtenerProyectoMayorInversion(proyectos) {
    return proyectos.reduce(
        (mayor, actual) =>
            actual.inversion > mayor.inversion ? actual : mayor
    );
}

module.exports = {
    registrarProyecto,
    calcularTotalInversion,
    obtenerProyectoMayorInversion
};