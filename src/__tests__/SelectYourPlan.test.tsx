import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  renderHook,
  waitFor
} from "@testing-library/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SelectYourPlan from "../components/Steps/SelectYourPlan";
import { multiStepFromSchema } from "../utils/schemas";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe("SelectYourPlan", () => {
  const props = {
    plans: {
      arcade: {
        monthly: 9,
        yearly: 90
      },
      advanced: {
        monthly: 12,
        yearly: 120
      },
      pro: {
        monthly: 15,
        yearly: 150
      }
    }
  };
  const useFormProps = {
    resolver: yupResolver(multiStepFromSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      planMode: true,
      customizableProfile: false,
      onlineService: false,
      largeStorage: false,
      totalPrice: 0
    },
    mode: "onChange"
  };
  const changeStepMock = jest.fn();

  describe("correct render", () => {
    it("should match snapshot", () => {
      const { result } = renderHook(() => useForm(useFormProps));
      expect(
        render(
          <SelectYourPlan
            register={result.current.register}
            getValues={result.current.getValues}
            plans={props.plans}
            changeStep={changeStepMock}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should correct select any plan", async () => {
      const { result } = renderHook(() => useForm(useFormProps));

      render(
        <SelectYourPlan
          register={result.current.register}
          getValues={result.current.getValues}
          plans={props.plans}
          changeStep={changeStepMock}
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
      const { result } = renderHook(() => useForm(useFormProps));

      const { rerender } = render(
        <SelectYourPlan
          register={result.current.register}
          getValues={result.current.getValues}
          plans={props.plans}
          changeStep={changeStepMock}
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
