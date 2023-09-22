const contratos = [
    {
        id_pago: 1,
        id_contrato: 101,
        id_user: 1001,
        id_local: 201,
        fecha_inicio: '2023-09-21',
        fecha_fin: '2023-09-28',
        términos: 'Términos del contrato 1',
        numero_invitados: 10,
        estado: 'Activo'
    },
    {
        id_pago: 2,
        id_contrato: 102,
        id_user: 1002,
        id_local: 202,
        fecha_inicio: '2023-10-01',
        fecha_fin: '2023-10-15',
        términos: 'Términos del contrato 2',
        numero_invitados: 20,
        estado: 'Inactivo'
    },
    {
        id_pago: 3,
        id_contrato: 103,
        id_user: 1003,
        id_local: 203,
        fecha_inicio: '2023-11-05',
        fecha_fin: '2023-11-12',
        términos: 'Términos del contrato 3',
        numero_invitados: 15,
        estado: 'Activo'
    },
    {
        id_pago: 4,
        id_contrato: 104,
        id_user: 1004,
        id_local: 204,
        fecha_inicio: '2023-12-03',
        fecha_fin: '2023-12-10',
        términos: 'Términos del contrato 4',
        numero_invitados: 12,
        estado: 'Inactivo'
    },
    {
        id_pago: 5,
        id_contrato: 105,
        id_user: 1005,
        id_local: 205,
        fecha_inicio: '2024-01-14',
        fecha_fin: '2024-01-21',
        términos: 'Términos del contrato 5',
        numero_invitados: 18,
        estado: 'Activo'
    }
];

const buscarcontratos = (id_pago,arreglo, callback)=> {
    const contratosEncontrado = arreglo.find((elemento)=>{
    return elemento.id_pago=== id_pago;
});

if( contratosEncontrado)
        callback( null, contratosEncontrado)
    else
    callback("no se pudo encontrar el contrato");
};

module.exports={
    buscarcontratos,
    contratos 

};