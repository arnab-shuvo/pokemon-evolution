import ApiInterface from "../utils/api";

export default class PokemonService {
  private readonly apiInteface: ApiInterface;
  constructor() {
    this.apiInteface = new ApiInterface();
  }

  public getByName = <T>(name: string): Promise<T> => {
    return this.apiInteface.get(`pokemon/${name}`);
  };
  public getAll = <T>(): Promise<T> => {
    return this.apiInteface.get("pokemon");
  };
}
