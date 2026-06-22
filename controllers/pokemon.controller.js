import {fetchAllLocalPokemons, fetchLocalPokemonById, fetchPokemonFromExternalApi} from '../services/pokemon.service.js';
import logger from '../utils/logger.js';

export const getLocalPokemons = async (req, res) => {
    try {
        const data = await fetchAllLocalPokemons();
        res.json(data);
    } catch (error) {
        logger.error(`Error in getLocalPokemons: ${error.message}`);
        res.status(500).json({ error: 'Server Error' });
    }
};

export const getLocalPokemonById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await fetchLocalPokemonById(id);
        
        if (!data) {
            return res.status(404).json({ error: 'Pokemon not found locally' });
        }
        res.json(data);
    } catch (error) {
        logger.error(`Error in getLocalPokemonById: ${error.message}`);
        res.status(500).json({ error: 'Server Error' });
    }
};

export const getExternalPokemon = async (req, res) => {
    try {
        const { name } = req.params;
        const data = await fetchPokemonFromExternalApi(name);
        res.json(data);
    } catch (error) {
        logger.error(`Error fetching from PokeAPI: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch external Pokemon data' });
    }
};