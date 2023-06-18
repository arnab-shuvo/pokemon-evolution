import PokemonService from "../pokemon/pokemon.service";
import SpeciesService from "../species/species.service";
import ApiInterface from "../utils/api";
import { IEvolution, IPokemon, ISpecies } from "../types/types";
import chainFormatter from "../utils/chainFormatter";
import { getCache, setCache } from "../client/redis";

export default class EvolutionService {
  private readonly apiInteface: ApiInterface;
  private readonly pokemonService: PokemonService;
  private readonly speciesService: SpeciesService;
  constructor(pokemonService: PokemonService, speciesService: SpeciesService) {
    this.apiInteface = new ApiInterface();
    this.pokemonService = pokemonService;
    this.speciesService = speciesService;
  }

  public chainByName = async (name: string) => {
    const cacheKey = `evolution-chain-${name}`;
    const cacheData = await getCache(cacheKey);

    if (cacheData) {
      return cacheData;
    }

    const pokemon: IPokemon = await this.pokemonService.getByName(name);
    const speciesUrl = pokemon.species.url;
    const species: ISpecies = await this.speciesService.getSpeciesByUrl(
      speciesUrl
    );
    const evoChainUrl = species.evolution_chain.url;
    const evoChain: IEvolution = await this.apiInteface.get(evoChainUrl, true);

    const response = JSON.stringify(chainFormatter(evoChain.chain));
    setCache(cacheKey, response);
    return response;
  };
}
