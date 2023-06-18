import { Request, Response } from "express";
import EvolutionService from "./evolution.service";
import PokemonService from "../pokemon/pokemon.service";
import SpeciesService from "../species/species.service";

export default class EvolutionController {
  private evolutionService: EvolutionService;
  constructor() {
    this.evolutionService = new EvolutionService(
      new PokemonService(),
      new SpeciesService()
    );
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
