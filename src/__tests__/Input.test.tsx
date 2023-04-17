import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Input from "../components/Input";

afterEach(cleanup);

describe("Input", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(
        <Input id="name" label="Name" error="Name is required!" />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should does correct input", () => {
      render(<Input id="name" label="Name" />);
      fireEvent.input(screen.getByRole("textbox", { name: "Name" }), {
        target: { value: "Some name" }
      });
      expect(screen.getByRole("textbox", { name: "Name" })).toHaveValue(
        "Some name"
      );
    });
  });
});
