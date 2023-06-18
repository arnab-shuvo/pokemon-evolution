import axios from "axios";

export default class ApiInterface {
  private baseOpts = {
    headers: {
      "content-type": "application/json",
    },
  };
  private baseUrl = "https://pokeapi.co/api/v2";
  public get = async <T>(url: string, absolutePath?: boolean): Promise<T> => {
    const reqUrl = absolutePath ? url : `${this.baseUrl}/${url}`;

    const response = await axios.get(reqUrl, {
      ...this.baseOpts,
    });

    return response.data;
  };
  public post = <T>(url: string, body: unknown): Promise<T> => {
    return axios.post(url, body, { ...this.baseOpts });
  };
}
