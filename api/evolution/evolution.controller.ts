import { Request, Response } from "express";
import EvolutionService from "./evolution.service";

export default class EvolutionController {
  //   constructor(private readonly service: ProductService) {}
  private evolutionService: EvolutionService;
  constructor() {
    this.evolutionService = new EvolutionService();
  }

  public getChainByName = async (req: Request, res: Response) => {
    const { name } = req.params;
    try {
      const evolutionChain = await this.evolutionService.chainByName(name);
      res.json(evolutionChain);
    } catch (error) {
      console.log(error);

      res.status(500).json("Something Went Wrong....");
    }
  };
}
