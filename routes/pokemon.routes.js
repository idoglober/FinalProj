import express from 'express';
import {getLocalPokemons, getLocalPokemonById, getExternalPokemon} from '../controllers/pokemon.controller.js';

const router = express.Router();

router.get('/local', getLocalPokemons);

router.get('/local/:id', getLocalPokemonById);

router.get('/external/:name', getExternalPokemon);

export default router;