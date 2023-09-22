const {buscarcontratos} = require("./arreglo");

const {contratos} = require("./arreglo");

buscarcontratos(2,contratos,( error,contratos) => {
    if (error) {
        console.log(error);
    }else{
        console.log('El contrato es:', contratos);
    } 
});
