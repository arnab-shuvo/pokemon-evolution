import EvolutionService from "./evolution.service";
import PokemonService from "../pokemon/pokemon.service";
import SpeciesService from "../species/species.service";
import {
  POKEMON_NAME,
  evaluationChainByUrl,
  formattedData,
  pokemonByName,
  speciesByUrl,
} from "../mockData";
import axios from "axios";

const pokemonService = new PokemonService();
const speciesService = new SpeciesService();

afterEach(() => {
  jest.clearAllMocks();
});

describe("Get evolution chain by name action ", () => {
  it("should call the pokemon details by name function", async () => {
    jest.spyOn(pokemonService, "getByName");
    const evolutionService = new EvolutionService(
      pokemonService,
      speciesService
    );
    await evolutionService.chainByName(POKEMON_NAME);
    expect(pokemonService.getByName).toHaveBeenCalled();
    expect(pokemonService.getByName).toHaveBeenCalledWith(POKEMON_NAME);
  });

  it("should call the species details by url function", async () => {
    jest.spyOn(pokemonService, "getByName").mockResolvedValue(pokemonByName);
    jest.spyOn(speciesService, "getSpeciesByUrl");
    const evolutionService = new EvolutionService(
      pokemonService,
      speciesService
    );
    await evolutionService.chainByName(POKEMON_NAME);
    expect(speciesService.getSpeciesByUrl).toHaveBeenCalled();
    expect(speciesService.getSpeciesByUrl).toHaveBeenCalledWith(
      pokemonByName.species.url
    );
  });

  it("should return correct value", async () => {
    jest.spyOn(pokemonService, "getByName").mockResolvedValue(pokemonByName);
    jest
      .spyOn(speciesService, "getSpeciesByUrl")
      .mockResolvedValue(speciesByUrl);
    jest.spyOn(axios, "get").mockResolvedValue({ data: evaluationChainByUrl });
    const evolutionService = new EvolutionService(
      pokemonService,
      speciesService
    );
    jest.mock("../utils/chainFormatter");

    const value = await evolutionService.chainByName(POKEMON_NAME);
    expect(value).toEqual(formattedData);
  });
});
