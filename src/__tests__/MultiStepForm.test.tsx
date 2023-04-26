import React from "react";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  act
} from "@testing-library/react";

import MultiStepForm from "../components/MultiStepForm";

afterEach(cleanup);

describe("MultiStepForm", () => {
  const props = {
    selectYourPlan: { plans: global.getStepProps().plans },
    pickAddOns: { addOns: global.getStepProps().addOns }
  };
  let formData = null;
  const mockOnSubmit = (data) => (formData = data);

  describe("correct render", () => {
    it("should match snapshot for all steps", async () => {
      /**YourInfo step */
      const { rerender, asFragment } = render(
        <MultiStepForm onSubmit={mockOnSubmit} steps={props} />
      );

      expect(asFragment()).toMatchSnapshot();

      fireEvent.input(screen.getByRole("textbox", { name: "Name" }), {
        target: { value: "Some name" }
      });
      fireEvent.input(screen.getByRole("textbox", { name: "Email Address" }), {
        target: { value: "some@mail.dom" }
      });
      fireEvent.input(screen.getByRole("textbox", { name: "Phone Number" }), {
        target: { value: "Some address" }
      });

      /**SelectYourPlan step */
      await act(() => {
        fireEvent.click(screen.getByRole("button"));
      });

      rerender(<MultiStepForm onSubmit={mockOnSubmit} steps={props} />);

      expect(asFragment()).toMatchSnapshot();

      /**PickAddons step */
      await act(() => {
        fireEvent.click(screen.getAllByRole("button")[1]);
      });

      rerender(<MultiStepForm onSubmit={mockOnSubmit} steps={props} />);

      expect(asFragment()).toMatchSnapshot();

      /**Summary step */
      await act(() => {
        fireEvent.click(screen.getAllByRole("button")[1]);
      });

      rerender(<MultiStepForm onSubmit={mockOnSubmit} steps={props} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("correct functionality", () => {
    it("should submit correct form", async () => {
      /**YourInfo step */
      const { rerender } = render(
        <MultiStepForm onSubmit={mockOnSubmit} steps={props} />
      );

      fireEvent.input(screen.getByRole("textbox", { name: "Name" }), {
        target: { value: "Some name" }
      });
      fireEvent.input(screen.getByRole("textbox", { name: "Email Address" }), {
        target: { value: "some@mail.dom" }
      });
      fireEvent.input(screen.getByRole("textbox", { name: "Phone Number" }), {
        target: { value: "Some address" }
      });

      /**SelectYourPlan step */
      await act(() => {
        fireEvent.click(screen.getByRole("button"));
      });

      rerender(<MultiStepForm onSubmit={mockOnSubmit} steps={props} />);

      const [arcade, advanced, pro] = screen.getAllByRole("radio");

      fireEvent.click(pro);

      expect(arcade).not.toBeChecked();
      expect(advanced).not.toBeChecked();
      expect(pro).toBeChecked();

      await act(async () => {
        fireEvent.click(screen.getByRole("checkbox"));
      });

      /**PickAddons step */
      await act(() => {
        fireEvent.click(screen.getAllByRole("button")[1]);
      });

      rerender(<MultiStepForm onSubmit={mockOnSubmit} steps={props} />);

      fireEvent.click(screen.getByLabelText(/online service/i));
      fireEvent.click(screen.getByLabelText(/larger storage/i));
      fireEvent.click(screen.getByLabelText(/customizable profile/i));

      expect(screen.getByLabelText(/online service/i)).toBeChecked();
      expect(screen.getByLabelText(/larger storage/i)).toBeChecked();
      expect(screen.getByLabelText(/customizable profile/i)).toBeChecked();

      /**Summary step */
      await act(() => {
        fireEvent.click(screen.getAllByRole("button")[1]);
      });

      rerender(<MultiStepForm onSubmit={mockOnSubmit} steps={props} />);

      await act(() => {
        fireEvent.click(screen.getAllByRole("button")[2]);
      });

      expect(formData).toMatchObject({
        name: "Some name",
        email: "some@mail.dom",
        phone: "Some address",
        plan: "pro",
        planMode: false,
        customizableProfile: true,
        onlineService: true,
        largeStorage: true,
        totalPrice: 21
      });
    });
  });
});
