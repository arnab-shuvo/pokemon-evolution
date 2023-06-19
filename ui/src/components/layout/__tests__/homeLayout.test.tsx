import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeLayout from "../homeLayout";

test("loads and displays greeting", async () => {
  render(
    <HomeLayout>
      <p data-testid="test-paragraph">Hi, Its's a Test</p>
    </HomeLayout>
  );

  expect(screen.getByText("Hi, Its's a Test")).toBeInTheDocument();
});
