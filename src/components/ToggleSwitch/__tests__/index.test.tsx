import React from "react";
import { render, cleanup } from "@testing-library/react";

import ToggleSwitch from "..";

afterEach(cleanup);

describe("ToggleSwitch testing", () => {
  it("Snapshot testing", () => {
    const { asFragment } = render(<ToggleSwitch />);

    expect(asFragment()).toMatchSnapshot();
  });
});
