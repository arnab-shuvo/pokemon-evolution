import PokemonService from "../pokemon/pokemon.service";
import SpeciesService from "../species/species.service";
import ApiInterface from "../utils/api";
import { IEvolution, IPokemon, ISpecies } from "../types/types";
import chainFormatter from "../utils/chainFormatter";

export default class EvolutionService {
  private readonly apiInteface: ApiInterface;
  private readonly pokemonService: PokemonService;
  private readonly speciesService: SpeciesService;
  constructor() {
    this.apiInteface = new ApiInterface();
    this.pokemonService = new PokemonService();
    this.speciesService = new SpeciesService();
  }

  public chainByName = async (name: string) => {
    const pokemon: IPokemon = await this.pokemonService.getByName(name);
    const speciesUrl = pokemon.species.url;
    const species: ISpecies = await this.speciesService.getSpeciesByUrl(
      speciesUrl
    );
    const evoChainUrl = species.evolution_chain.url;
    const evoChain: IEvolution = await this.apiInteface.get(evoChainUrl, true);
    return chainFormatter(evoChain.chain);
  };
}
