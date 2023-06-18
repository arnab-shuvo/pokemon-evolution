import express, { Express, Request, Response, Router } from "express";
import { EvolutionController } from "../controller/evolution/evolution.controller";

const evolutionRouter: Router = express.Router();
const evolutionController = new EvolutionController();

evolutionRouter.get("/", evolutionController.getAll);

export default evolutionRouter;
