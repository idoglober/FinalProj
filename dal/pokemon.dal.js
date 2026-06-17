const localPokemons = [
    { id: 1, name: 'Bulbasaur', type: 'Grass' },
    { id: 4, name: 'Charmander', type: 'Fire' },
    { id: 7, name: 'Squirtle', type: 'Water' },
    { id: 25, name: 'Pikachu', type: 'Electric' }
];

export const getAllPokemons = async () => {
    return localPokemons;
};

export const getPokemonById = async (id) => {
    return localPokemons.find(pokemon => pokemon.id === parseInt(id));
};