import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Button from "../components/Button";

afterEach(cleanup);

describe("Button", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      const { asFragment } = render(<Button />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("Button should work correctly with 'button' type", () => {
      const mockFun = jest.fn();

      render(
        <Button type="button" onClick={mockFun}>
          Execute
        </Button>
      );
      fireEvent.click(screen.getByRole("button"));
      expect(mockFun).toBeCalled();
    });

    it("Button should work correctly with 'submit' type", () => {
      const mockFun = jest.fn((e) => e.preventDefault());

      render(
        <form onSubmit={mockFun}>
          <Button type="submit">Submit</Button>
        </form>
      );
      fireEvent.click(screen.getByRole("button"));
      expect(mockFun).toBeCalled();
    });
  });
});
