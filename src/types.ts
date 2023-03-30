import React from "react";
import { multiStepFromSchema } from "./utils/schemas";

import type { InferType } from "yup";
import type {
  UseFormRegister,
  UseFormGetValues,
  UseFormSetValue,
  FieldErrors,
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

interface StepProps {
  title: string;
  subTitle: string;
  changeStep: (step: number) => void;

  register: UseFormRegister<MFS>;
  getValues: UseFormGetValues<MFS>;
  errors: FieldErrors<MFS>;
}

export type YourInfoProps = StepProps;

export interface SelectYourPlanProps extends Omit<StepProps, "errors"> {
  plans: {
    [x in "arcade" | "advanced" | "pro"]: {
      label: string;
      image: string;
      pricing: {
        monthly: number;
        yearly: number;
      };
    };
  };
}

export interface PickAddOnsProps extends Omit<StepProps, "errors"> {
  addOns: {
    [x in "largeStorage" | "onlineSerivce" | "customizableProfile"]: {
      label: string;
      discription: string;
      pricing: {
        monthly: number;
        yearly: number;
      };
    };
  };
}

export interface SummaryProps extends Omit<StepProps, "register" | "errors"> {
  plans: SelectYourPlanProps["plans"];
  addOns: PickAddOnsProps["addOns"];

  isValid: boolean;
  setValue: UseFormSetValue<MFS>;
}

/**
 * Top-level compoents
 */

export interface MultiStepFormProps {
  steps: {
    yourInfo: Omit<
      YourInfoProps,
      "register" | "getValues" | "errors" | "changeStep"
    >;
    selectYoutPlan: Omit<
      SelectYourPlanProps,
      "register" | "getValues" | "changeStep"
    >;
    pickAddOns: Omit<PickAddOnsProps, "register" | "getValues" | "changeStep">;
    summary: Omit<
      SummaryProps,
      "getValues" | "plans" | "addOns" | "changeStep" | "setValue" | "isValid"
    >;
  };
}
