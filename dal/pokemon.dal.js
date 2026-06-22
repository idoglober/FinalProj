const localPokemons = [
    {
    "id": 1,
    "name": "bulbasaur",
    "height": 7,
    "weight": 69,
    "types": [
        "grass",
        "poison"
    ]
},
    {
    "id": 4,
    "name": "charmander",
    "height": 6,
    "weight": 85,
    "types": [
        "fire"
    ]
},
    {
    "id": 7,
    "name": "squirtle",
    "height": 5,
    "weight": 90,
    "types": [
        "water"
    ]
},
    {
    "id": 25,
    "name": "pikachu",
    "height": 4,
    "weight": 60,
    "types": [
        "electric"
    ]
},
    {
    "id": 94,
    "name": "gengar",
    "height": 15,
    "weight": 405,
    "types": [
        "ghost",
        "poison"
    ]
},

];

export const getAllPokemons = async () => {
    return localPokemons;
};

export const getPokemonById = async (id) => {
    return localPokemons.find(pokemon => pokemon.id === parseInt(id));
};