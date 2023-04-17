import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  renderHook,
  act,
  waitFor
} from "@testing-library/react";

import YourInfo from "../components/Steps/YourInfo";
import { multiStepFromSchema } from "../utils/schemas";

afterEach(cleanup);

describe("YourInfo", () => {
  const mockChangeStep = jest.fn();
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

  describe("correct render", () => {
    it("should match snapshot", () => {
      const { result } = renderHook(() => useForm(useFormProps));

      expect(
        render(
          <YourInfo
            trigger={result.current.trigger}
            register={result.current.register}
            getValues={result.current.getValues}
            errors={result.current.formState.errors}
            changeStep={mockChangeStep}
          />
        ).asFragment()
      ).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should does correct input with no errors", async () => {
      const { result } = renderHook(() => useForm(useFormProps));

      const { rerender } = render(
        <YourInfo
          trigger={result.current.trigger}
          register={result.current.register}
          getValues={result.current.getValues}
          errors={result.current.formState.errors}
          changeStep={mockChangeStep}
        />
      );

      fireEvent.input(screen.getByRole("textbox", { name: "Name" }), {
        target: { value: "Some Fancy-name" }
      });
      fireEvent.input(screen.getByRole("textbox", { name: "Email Address" }), {
        target: { value: "some@mail.dom" }
      });
      fireEvent.input(screen.getByRole("textbox", { name: "Phone Number" }), {
        target: { value: "+1 555 555 5555" }
      });

      expect(screen.getByRole("textbox", { name: "Name" })).toHaveValue(
        "Some Fancy-name"
      );
      expect(
        screen.getByRole("textbox", { name: "Email Address" })
      ).toHaveValue("some@mail.dom");
      expect(screen.getByRole("textbox", { name: "Phone Number" })).toHaveValue(
        "+1 555 555 5555"
      );

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(mockChangeStep).toBeCalled();
    });

    it("should have proper error message when input is incorrect", async () => {
      const { result } = renderHook(() => useForm(useFormProps));
      const { rerender } = render(
        <YourInfo
          trigger={result.current.trigger}
          register={result.current.register}
          getValues={result.current.getValues}
          errors={result.current.formState.errors}
          changeStep={mockChangeStep}
        />
      );

      fireEvent.input(screen.getByRole("textbox", { name: "Email Address" }), {
        target: { value: "Some Address" }
      });

      await act(async () => {
        await result.current.trigger(["name", "email", "phone"]);
      });

      rerender(
        <YourInfo
          trigger={result.current.trigger}
          register={result.current.register}
          getValues={result.current.getValues}
          errors={result.current.formState.errors}
          changeStep={mockChangeStep}
        />
      );

      expect(
        screen.getByLabelText("Name is a required field!")
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText("Must be a valid email!")
      ).toBeInTheDocument();
      expect(
        screen.getByLabelText("Phone is a required field!")
      ).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(mockChangeStep).not.toBeCalled();
    });
  });
});
