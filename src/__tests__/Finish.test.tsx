import React from "react";
import { render, cleanup } from "@testing-library/react";

import Finish from "../components/Steps/Finish";

describe("Finish", () => {
  describe("correct render", () => {
    it("should match snapshot", () => {
      expect(render(<Finish />).asFragment()).toMatchSnapshot();
    });
  });
});
