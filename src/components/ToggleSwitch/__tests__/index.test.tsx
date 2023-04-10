import React from "react";
import {
  render, screen, fireEvent, cleanup
} from "@testing-library/react";

import ToggleSwitch from "..";

afterEach(cleanup);

describe("ToggleSwitch testing", () => {
  it("Snapshot testing", () => {
    const { asFragment } = render(<ToggleSwitch />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Checkbox input testing", () => {
    render(<ToggleSwitch />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(
      (screen.getByRole("checkbox") as HTMLInputElement)
    ).toBeChecked();
  });
});
