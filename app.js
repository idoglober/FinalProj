import express from 'express';
import pokemonRoutes from './routes/pokemon.routes.js';
import logger from './utils/logger.js';

const app = express();

app.use((req, res, next) => {
    logger.info(`Incoming request: ${req.method} ${req.url}`);
    next();
});


app.use(express.json());

app.use('/api/pokemon', pokemonRoutes);

export default app;