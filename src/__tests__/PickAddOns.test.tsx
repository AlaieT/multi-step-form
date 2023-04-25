import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  renderHook
} from "@testing-library/react";
import { useForm } from "react-hook-form";

import PickAddOns from "../components/Steps/PickAddOns";
import { FormContext } from "../utils/context";

afterEach(cleanup);

describe("PickAddOns", () => {
  const mockChangeStep = jest.fn();
  const props = global.getStepProps();

  describe("correct render", () => {
    it("should match snapshot", () => {
      const { result } = renderHook(() => useForm(global.getUseFormProps()));

      expect(
        render(
          <FormContext.Provider
            value={{
              form: {
                planMode: "yearly",
                priceMode: "yr"
              },
              setForm: () => undefined
            }}
          >
            <PickAddOns
              addOns={props.addOns}
              register={result.current.register}
              getValues={result.current.getValues}
              changeStep={mockChangeStep}
            />
          </FormContext.Provider>
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should correct select add-ons", () => {
      const { result } = renderHook(() => useForm(global.getUseFormProps()));

      render(
        <FormContext.Provider
          value={{
            form: {
              planMode: "yearly",
              priceMode: "yr"
            },
            setForm: () => undefined
          }}
        >
          <PickAddOns
            addOns={props.addOns}
            register={result.current.register}
            getValues={result.current.getValues}
            changeStep={mockChangeStep}
          />
        </FormContext.Provider>
      );

      expect(screen.getByLabelText(/online service/i)).not.toBeChecked();
      expect(screen.getByLabelText(/larger storage/i)).not.toBeChecked();
      expect(screen.getByLabelText(/customizable profile/i)).not.toBeChecked();

      fireEvent.click(screen.getByLabelText(/online service/i));
      fireEvent.click(screen.getByLabelText(/larger storage/i));
      fireEvent.click(screen.getByLabelText(/customizable profile/i));

      expect(screen.getByLabelText(/online service/i)).toBeChecked();
      expect(screen.getByLabelText(/larger storage/i)).toBeChecked();
      expect(screen.getByLabelText(/customizable profile/i)).toBeChecked();
    });
  });
});
