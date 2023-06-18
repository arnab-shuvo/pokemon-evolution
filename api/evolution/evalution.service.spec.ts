import PokemonService from "../pokemon/pokemon.service";
import SpeciesService from "../species/species.service";
import EvolutionService from "./evolution.service";

jest.mock("../pokemon/pokemon.service");
const evolutionService = new EvolutionService();

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Evolution Service", () => {
  it.only("should call pokemonByName api with given value ", async () => {
    const d = await evolutionService.chainByName("eevee");
    expect(PokemonService).toHaveBeenCalled();
    console.log(d, "===d");
  });
});
