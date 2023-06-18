import chainFormatter from "./chainFormatter";

const data = {
  evolves_to: [
    {
      evolves_to: [
        {
          evolves_to: [],
          is_baby: false,
          species: {
            name: "butterfree",
          },
        },
      ],
      is_baby: false,
      species: {
        name: "metapod",
      },
    },
  ],
  is_baby: false,
  species: {
    name: "caterpie",
  },
};

const expectedResult = {
  name: "caterpie",
  variations: [
    {
      name: "metapod",
      variations: [{ name: "butterfree", variations: [] }],
    },
  ],
};

describe("Chain Formatter", () => {
  it("should return formatted data", () => {
    expect(chainFormatter(data)).toEqual(expectedResult);
  });
});
