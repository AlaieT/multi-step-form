import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Button from "..";

afterEach(cleanup);

describe("Button testing", () => {
  it("Snanpshot testing", () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Button type button", () => {
    const mockFun = jest.fn();

    render(
      <Button type="button" onClick={mockFun}>
        Execute
      </Button>
    );
    fireEvent.click(screen.getByText(/execute/i));
    expect(mockFun).toBeCalled();
  });

  it("Button type submit", () => {
    const mockFun = jest.fn(e => e.preventDefault());

    render(
      <form onSubmit={mockFun}>
        <Button type="submit">Submit</Button>
      </form>
    );
    fireEvent.click(screen.getByText(/submit/i));
    expect(mockFun).toBeCalled();
  });
});
