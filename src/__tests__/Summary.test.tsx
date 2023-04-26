import React from "react";
import { render, cleanup, renderHook } from "@testing-library/react";

import Summary from "../components/Steps/Summary";
import { useForm } from "react-hook-form";
import { FormContext } from "../utils/context";

afterEach(cleanup);

describe("Summary", () => {
  const props = global.getStepProps();
  const mockChangeStep = jest.fn();

  describe("correct render", () => {
    it("should match snapshot", () => {
      const { result } = renderHook(() => useForm(global.getUseFormProps()));

      expect(
        render(
          <FormContext.Provider
            value={{
              form: { planMode: "yearly", priceMode: "yr" },
              setForm: () => undefined
            }}
          >
            <Summary
              plans={props.plans}
              addOns={props.addOns}
              isValid
              setValue={result.current.setValue}
              getValues={result.current.getValues}
              changeStep={mockChangeStep}
            />
          </FormContext.Provider>
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
});
