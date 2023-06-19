import { ChainType } from "./types/chain";

export default function simpler(chain: ChainType) {
  const result: string[] = [];

  const simpled = (chain: ChainType) => {
    result.push(chain.name);
    if (chain.variations.length > 0) {
      chain.variations.forEach((variation: ChainType) => {
        simpled(variation);
      });
    }
  };

  simpled(chain);

  return result;
}
