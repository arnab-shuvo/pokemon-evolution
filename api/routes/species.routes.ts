import { Router } from "express";
import SpeciesController from "../species/species.controller";

const speciesRouter: Router = Router();
const speciesController = new SpeciesController();

speciesRouter.get("/:id", speciesController.getById);

export default speciesRouter;
