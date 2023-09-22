const { contratos } = require('./arreglo');  

// Usando forEach
console.log("Ciclo forEach");
contratos.forEach(({ id_pago, id_contrato, id_user, id_local, fecha_inicio, fecha_fin, terminos, numero_invitados, estado }, objecto) => {
    console.log(`Elemento ${objecto + 1}:
    id_pago: ${id_pago},
    id_contrato: ${id_contrato},
    id_user: ${id_user},
    id_local: ${id_local},
    fecha_inicio: ${fecha_inicio},
    fecha_fin: ${fecha_fin},
    terminos: ${terminos},
    numero_invitados: ${numero_invitados},
    estado: ${estado}`);

});

// Usando for in 
console.log("Ciclo for in");
for (let objecto in contratos) {
    const { id_pago, id_contrato, id_user, id_local, fecha_inicio,fecha_fin, terminos, numero_invitados, estado } = contratos[objecto];
    console.log(`Elemento ${parseInt(objecto) + 1}:
    id_pago: ${id_pago},
    id_contrato: ${id_contrato},
    id_user: ${id_user},
    id_local: ${id_local},
    fecha_inicio: ${fecha_inicio},
    fecha_fin: ${fecha_fin},
    terminos: ${terminos},
    numero_invitados: ${numero_invitados},
    estado: ${estado}`);
}

// Usando  for of
console.log("Ciclo for of");
let objecto = 1;
for (const { id_pago, id_contrato, id_user, id_local, fecha_inicio,fecha_fin, terminos, numero_invitados, estado } of contratos) {
    console.log(`Elemento ${objecto}:
    id_pago: ${id_pago},
    id_contrato: ${id_contrato},
    id_user: ${id_user},
    fecha_inicio: ${fecha_inicio},
    fecha_fin: ${fecha_fin},
    terminos: ${terminos},
    numero_invitados: ${numero_invitados},
    estado: ${estado}`);
    objecto++;
}