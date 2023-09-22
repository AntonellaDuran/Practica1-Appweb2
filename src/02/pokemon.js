const { httpclient } = require('./Plugins/httpclient');

const BuscarPokemonId = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpclient.get(url);
        return pokemon.name;
    } catch (error) {
        throw new Error(`Hay un error en la busqueda del pokemon: ${error.message}`);
    }
};

module.exports = { BuscarPokemon: BuscarPokemonId };