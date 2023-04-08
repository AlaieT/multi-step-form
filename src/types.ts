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

interface StepProps {
  title: string;
  subTitle: string;
}

export interface YourInfoProps extends StepProps {
  trigger: UseFormTrigger<MFS>;
  register: UseFormRegister<MFS>;
  getValues: UseFormGetValues<MFS>;
  errors: FieldErrors<MFS>;

  changeStep: (step: number) => void;
}

export interface SelectYourPlanProps extends StepProps {
  plans: {
    [x in "arcade" | "advanced" | "pro"]: {
      label: string;
      pricing: {
        monthly: number;
        yearly: number;
      };
    };
  };

  register: UseFormRegister<MFS>;
  getValues: UseFormGetValues<MFS>;

  changeStep: (step: number) => void;
}

export interface PickAddOnsProps extends StepProps {
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

  register: UseFormRegister<MFS>;
  getValues: UseFormGetValues<MFS>;

  changeStep: (step: number) => void;
}

export interface SummaryProps extends StepProps {
  plans: SelectYourPlanProps["plans"];
  addOns: PickAddOnsProps["addOns"];

  isValid: boolean;
  setValue: UseFormSetValue<MFS>;
  getValues: UseFormGetValues<MFS>;

  changeStep: (step: number) => void;
}

/**
 * Top-level compoents
 */

export interface MultiStepFormProps {
  steps: {
    yourInfo: StepProps;
    selectYoutPlan: Pick<SelectYourPlanProps, "plans" | "title" | "subTitle">;
    pickAddOns: Pick<PickAddOnsProps, "addOns" | "title" | "subTitle">;
    summary: StepProps;
  };
}
