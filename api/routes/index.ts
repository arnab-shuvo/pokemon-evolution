import express, { Router } from "express";
import evolutionRouter from "./evolution.routes";
import speciesRouter from "./species.routes";
import pokemonRouter from "./pokemon.routes";

const rootRouter: Router = express.Router();

rootRouter.use("/evolution", evolutionRouter);
rootRouter.use("/pokemon", pokemonRouter);
rootRouter.use("/species", speciesRouter);

export default rootRouter;
