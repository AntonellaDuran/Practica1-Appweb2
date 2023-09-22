interface contrato {
    id_pago: number;
    id_contrato: number;
    id_user: number;
    id_local: number;
    fecha_inicio: string;
    fecha_fin:string;
    terminos: string;
    numero_invitados: number;
    estado: string;
  }
  
  const contratos: contrato[] = [
    {
        id_pago: 1,
        id_contrato: 101,
        id_user: 1001,
        id_local: 201,
        fecha_inicio: '2023-09-21',
        fecha_fin: '2023-09-28',
        terminos: 'Términos del contrato 1',
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
        terminos: 'Términos del contrato 2',
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
        terminos: 'Términos del contrato 3',
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
        terminos: 'Términos del contrato 4',
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
        terminos: 'Términos del contrato 5',
        numero_invitados: 18,
        estado: 'Activo'
    }
];

  function displayServicesWithForEach(): void {
    console.log('Recorriendo con forEach:');
    contratos.forEach((contrato, index) => {
      console.log(`[${index}] id_pago: ${contrato.id_pago}, id_contrato: ${contrato.id_contrato}, id_user: ${contrato.id_user}, id_local: ${contrato.id_local}, fecha_inicio: ${contrato.fecha_inicio}, fecha_fin: ${contrato.fecha_fin},terminos: ${contrato.terminos},numero_invitados: ${contrato.numero_invitados},estado: ${contrato.estado}`);
    });
  }
  
  function displayServicesWithForIn(): void {
    console.log('Recorriendo con for in:');
    for (const index in contratos) {
      const contrato = contratos[index];
      console.log(`[${index}] id_pago: ${contrato.id_pago}, id_contrato: ${contrato.id_contrato}, id_user: ${contrato.id_user}, id_local: ${contrato.id_local}, fecha_inicio: ${contrato.fecha_inicio}, fecha_fin: ${contrato.fecha_fin},terminos: ${contrato.terminos},numero_invitados: ${contrato.numero_invitados},estado: ${contrato.estado}`);
    }
  }
  
  function displayServicesWithForOf(): void {
    console.log('Recorriendo con for of:');
    let index = 0;
    for (const contrato of contratos) {
      console.log(`[${index}] id_pago: ${contrato.id_pago}, id_contrato: ${contrato.id_contrato}, id_user: ${contrato.id_user}, id_local: ${contrato.id_local}, fecha_inicio: ${contrato.fecha_inicio}, fecha_fin: ${contrato.fecha_fin},terminos: ${contrato.terminos},numero_invitados: ${contrato.numero_invitados},estado: ${contrato.estado}`);
      index++;
    }
  }
  
  displayServicesWithForEach();
  displayServicesWithForIn();
  displayServicesWithForOf();

  