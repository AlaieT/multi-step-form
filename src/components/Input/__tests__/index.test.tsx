import React from "react";
import { render, cleanup } from "@testing-library/react";

import Input from "..";

afterEach(cleanup);

describe("Input testing", () => {
  it("Snapshot tesing", () => {
    const { asFragment } = render(
      <Input id="name" label="Name" error="Name is required!" />
    );

    expect(asFragment).toMatchSnapshot();
  });
});
