import { Router } from "express";
import EvolutionController from "../evolution/evolution.controller";

const evolutionRouter: Router = Router();
const evolutionController = new EvolutionController();

evolutionRouter.get("/chain/:name", evolutionController.getChainByName);

export default evolutionRouter;
