import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  renderHook,
  act
} from "@testing-library/react";
import { useForm } from "react-hook-form";

import SelectYourPlan from "../components/Steps/SelectYourPlan";

afterEach(cleanup);

describe("SelectYourPlan", () => {
  const mockChangeStep = jest.fn();
  const props = global.getStepProps();

  describe("correct render", () => {
    it("should match snapshot", () => {
      const { result } = renderHook(() => useForm(global.getUseFormProps()));
      expect(
        render(
          <SelectYourPlan
            register={result.current.register}
            getValues={result.current.getValues}
            plans={props.plans}
            changeStep={mockChangeStep}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should correct select any plan", async () => {
      const { result } = renderHook(() => useForm(global.getUseFormProps()));

      render(
        <SelectYourPlan
          register={result.current.register}
          getValues={result.current.getValues}
          plans={props.plans}
          changeStep={mockChangeStep}
        />
      );

      const [arcade, advanced, pro] = screen.getAllByRole("radio");

      expect(arcade).toBeChecked();
      expect(advanced).not.toBeChecked();
      expect(pro).not.toBeChecked();
      expect(result.current.getValues("plan")).toBe("arcade");

      fireEvent.click(advanced);

      expect(arcade).not.toBeChecked();
      expect(advanced).toBeChecked();
      expect(pro).not.toBeChecked();
      expect(result.current.getValues("plan")).toBe("advanced");

      fireEvent.click(pro);

      expect(arcade).not.toBeChecked();
      expect(advanced).not.toBeChecked();
      expect(pro).toBeChecked();
      expect(result.current.getValues("plan")).toBe("pro");
    });

    it("should switch payment mode on switch", async () => {
      const { result } = renderHook(() => useForm(global.getUseFormProps()));

      render(
        <SelectYourPlan
          register={result.current.register}
          getValues={result.current.getValues}
          plans={props.plans}
          changeStep={mockChangeStep}
        />
      );

      expect(screen.getAllByText("2 months free")).toHaveLength(3);

      await act(async () => {
        fireEvent.click(screen.getByRole("checkbox"));
      });

      expect(screen.queryByText("2 months free")).toBeNull();
    });
  });
});
