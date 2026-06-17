const test = require("node:test");
const assert = require("node:assert");

const {

  registrarProyecto,
  calcularTotalInversion,
  obtenerProyectoMayorInversion,

} = require("./ExamenT3");

test("Registrar proyecto", () => {

  const proyecto = registrarProyecto("Reposición Ferrobamba", 1753);

  assert.strictEqual(proyecto.nombre, "Reposición Ferrobamba");

  assert.strictEqual(proyecto.inversion, 1753);

});


test("Obtener proyecto con mayor inversión", () => {

  const proyectos = [
    { nombre: "Ferrobamba", inversion: 1753 },
    { nombre: "Coimolache", inversion: 500},
    { nombre: "Mina Justa", inversion: 500 },
  ];

  const mayor = obtenerProyectoMayorInversion(proyectos);

  assert.strictEqual(mayor.nombre, "Ferrobamba");

});

test('Calcular inversión total', () => {
    const proyectos = [
        { nombre: 'Ferrobamba', inversion: 1753 },
        { nombre: 'Coimolache', inversion: 598 }
    ];

    const total = calcularTotalInversion(proyectos);

    console.log('Total calculado:', total);

    assert.strictEqual(total, 2351);
});