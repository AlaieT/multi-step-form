import { object, string, boolean } from "yup";

import type { InferType } from "yup";

const multiStepFromSchema = object({
  name: string().required("Name is a required field!"),
  email: string()
    .required("Email is a required field!")
    .email("Must be a valid email!"),
  phone: string().required("Phone is a required field!"),
  plan: string().oneOf(["arcade", "advanced", "pro"]).required(),
  yearly: boolean(),
  onlineSerivce: boolean(),
  largeStorage: boolean(),
  customizableProfile: boolean(),
});

type MultiStepFromSchema = InferType<typeof multiStepFromSchema>;

export type { MultiStepFromSchema };
export { multiStepFromSchema };
