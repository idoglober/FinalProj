import {getAllPokemons, getPokemonById, } from '../dal/pokemon.dal.js';

export const fetchAllLocalPokemons = async () => {
    return await getAllPokemons();
};

export const fetchLocalPokemonById = async (id) => {
    return await getPokemonById(id);
};

export const fetchPokemonFromExternalApi = async (name) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    
    if (!response.ok) {
        throw new Error('Pokemon not found');
    }
    
    const data = await response.json();

    return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types.map(t => t.type.name)
    };
};