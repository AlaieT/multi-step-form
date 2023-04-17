import React from "react";
import { multiStepFromSchema } from "./utils/schemas";

import type { InferType } from "yup";
import type {
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
  UseFormTrigger,
  FieldErrors
} from "react-hook-form";

/**
 * Simple components
 */

export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "className"
>;

export type ToggleSwitchProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type" | "children"
>;

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "children"> {
  label?: string;
  error?: string;
}

/**
 * Steps Props
 */

export type MFS = InferType<typeof multiStepFromSchema>;

export interface YourInfoProps {
  trigger: UseFormTrigger<MFS>;
  register: UseFormRegister<MFS>;
  getValues: UseFormGetValues<MFS>;
  errors: FieldErrors<MFS>;

  changeStep: (step: number) => void;
}

export interface SelectYourPlanProps {
  plans: {
    [x in "arcade" | "advanced" | "pro"]: {
      monthly: number;
      yearly: number;
    };
  };

  register: UseFormRegister<MFS>;
  getValues: UseFormGetValues<MFS>;

  changeStep: (step: number) => void;
}

export interface PickAddOnsProps {
  addOns: {
    [x in "largeStorage" | "onlineService" | "customizableProfile"]: {
      monthly: number;
      yearly: number;
    };
  };

  register: UseFormRegister<MFS>;
  getValues: UseFormGetValues<MFS>;

  changeStep: (step: number) => void;
}

export interface SummaryProps {
  plans: SelectYourPlanProps["plans"];
  addOns: PickAddOnsProps["addOns"];

  isValid: boolean;
  setValue: UseFormSetValue<MFS>;
  getValues: UseFormGetValues<MFS>;

  changeStep: (step: number) => void;
}

/**
 * Top-level components
 */

export interface MultiStepFormProps {
  steps: {
    selectYourPlan: Pick<SelectYourPlanProps, "plans">;
    pickAddOns: Pick<PickAddOnsProps, "addOns">;
  };
}

/**
 * Context
 */

export interface FormContextType {
  form: { planMode: "yearly" | "monthly"; priceMode: "yr" | "mo" };
  setForm: React.Dispatch<FormContextType["form"]>;
}
