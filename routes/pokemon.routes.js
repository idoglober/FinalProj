import express from 'express';
import {getLocalPokemons, getLocalPokemonById, getExternalPokemon} from '../controllers/pokemon.controller.js';

const router = express.Router();
/*
because i added in app "/pokemon" 
the full paths you check in postman will be:
    http://localhost:3000/pokemon/local
    http://localhost:3000/pokemon/local/:id
    http://localhost:3000/pokemon/external/:name
*/
router.get('/local', getLocalPokemons);

router.get('/local/:id', getLocalPokemonById);

router.get('/external/:name', getExternalPokemon);

export default router;