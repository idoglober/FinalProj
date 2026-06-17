import express from 'express';
import * as pokemonController from '../controllers/pokemon.controller.js';

const router = express.Router();


router.get('/local', pokemonController.getLocalPokemons);

router.get('/local/:id', pokemonController.getLocalPokemonById);

router.get('/external/:name', pokemonController.getExternalPokemon);

export default router;