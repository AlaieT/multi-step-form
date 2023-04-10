import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Input from "..";

afterEach(cleanup);

describe("Input testing", () => {
  it("Snapshot tesing", () => {
    const { asFragment } = render(
      <Input id="name" label="Name" error="Name is required!" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Correct input value testing", () => {
    render(<Input id="name" label="Name" />);
    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "Some name" }
    });
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toEqual(
      "Some name"
    );
  });
});
