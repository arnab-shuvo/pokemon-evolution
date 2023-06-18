import { evaluationChainByUrl, formattedData } from "../mockData";
import chainFormatter from "./chainFormatter";

describe("Chain Formatter", () => {
  it("should return formatted data", () => {
    expect(chainFormatter(evaluationChainByUrl.chain)).toEqual(formattedData);
  });
});
