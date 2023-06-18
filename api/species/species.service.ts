import ApiInterface from "../utils/api";

export default class SpeciesService {
  private readonly apiInteface: ApiInterface;
  constructor() {
    this.apiInteface = new ApiInterface();
  }

  public getById = <T>(id: string): Promise<T> => {
    return this.apiInteface.get(`/pokemon-species/${id}/`);
  };
  public getSpeciesByUrl = <T>(url: string): Promise<T> => {
    return this.apiInteface.get(url, true);
  };
}
