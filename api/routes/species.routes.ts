import express, { Express, Request, Response, Router } from "express";
import { SpeciesController } from "../controller/species/species.controller";

const speciesRouter: Router = express.Router();
const speciesController = new SpeciesController();

speciesRouter.get("/", speciesController.getAll);

export default speciesRouter;
