import { Request, Response } from "express";
import SpeciesService from "./species.service";

export default class SpeciesController {
  private readonly speciesService: SpeciesService;
  constructor() {
    this.speciesService = new SpeciesService();
  }
  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const speciesInfo = await this.speciesService.getById(id);
      res.json(speciesInfo);
    } catch (error) {
      res.status(500).json("Something went wrong....");
    }
  };
}
