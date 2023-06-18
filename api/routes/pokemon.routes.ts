import express, { Express, Request, Response, Router } from "express";
import { PokemonController } from "../controller/pokemon/pokemon.controller";

const pokemonRouter: Router = express.Router();
const pokemonController = new PokemonController();

pokemonRouter.get("/", pokemonController.getAll);

export default pokemonRouter;
