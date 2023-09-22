const {BuscarPokemon}=require ('./pokemon')
const pokemonId = 50;
BuscarPokemon(pokemonId)
  .then((Nombre) => {
    console.log(`nombre del pokemon: ${Nombre}`);
  })
  .catch((error) => {
    console.error('Hay un error en la busqueda del pokemon:', error.message);
  });