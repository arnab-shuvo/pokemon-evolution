export interface IPokemon {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
}
export interface ISpecies {
  id: number;
  name: string;
  evolution_chain: {
    url: string;
  };
}
export type ChainNode = {
  evolves_to: ChainNode[];
  species: {
    name: string;
  };
};
export type FormatedChain = {
  name: string;
  variations: FormatedChain[] | [];
};

export interface IEvolution {
  chain: ChainNode;
}
