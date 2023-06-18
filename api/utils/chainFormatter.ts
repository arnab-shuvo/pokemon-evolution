import { ChainNode, FormatedChain } from "../types/types";

export default function chainFormatter(data: ChainNode): FormatedChain {
  //Create output structure
  const output: FormatedChain = {
    name: data.species.name,
    variations: [],
  };
  // create an array of vaiations if exists
  if (data.evolves_to && data.evolves_to.length > 0) {
    //Go for recursive functionality to go through the nested variations
    output.variations = data.evolves_to.map((evolvesTo) =>
      chainFormatter(evolvesTo)
    );
  }

  return output;
}
