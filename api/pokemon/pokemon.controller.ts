import { Request, Response } from "express";
import PokemonService from "./pokemon.service";

export default class PokemonController {
  private readonly pokemonService: PokemonService;
  constructor() {
    this.pokemonService = new PokemonService();
  }

  public getByName = async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const pokemonInfo = await this.pokemonService.getByName(name);
      res.json(pokemonInfo);
    } catch (error) {
      res.status(500).json("Something went wrong....");
    }
  };
}
