import { Router } from "express";
import PokemonController from "../pokemon/pokemon.controller";

const pokemonRouter: Router = Router();
const pokemonController = new PokemonController();

pokemonRouter.get("/:name", pokemonController.getByName);

export default pokemonRouter;
