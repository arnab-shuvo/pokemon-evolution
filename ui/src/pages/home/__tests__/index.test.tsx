import React from "react";
import {
  render,
  fireEvent,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "..";

import axios from "axios";

jest.mock("axios", () => ({
  get: jest.fn(),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;
beforeEach(() => {
  mockedAxios.get.mockResolvedValue({
    name: "bulbasaur",
    variations: [
      {
        name: "ivysaur",
        variations: [
          {
            name: "venusaur",
            variations: [],
          },
        ],
      },
    ],
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test("loads and displays greeting", async () => {
  act(() => {
    render(<Home />);
  });

  expect(screen.getByTestId("pokemon-name-input")).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("pokemon-name-input"), {
    target: { value: "bulbasaur" },
  });

  await waitFor(async () => {
    expect(screen.getByTestId("pokemon-name-input")).toHaveValue("bulbasaur");
  });
  expect(screen.getByTestId("pokemon-name-input")).toHaveValue("bulbasaur");

  expect(screen.getByTestId("submit-button")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("submit-button"));

  await waitFor(async () => {
    expect(screen.getByTestId("searched-pokemon-name")).toBeInTheDocument();
  });
  expect(screen.getByTestId("searched-pokemon-name")).toBeInTheDocument();
});
