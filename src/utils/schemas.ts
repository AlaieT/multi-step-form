import { object, string, boolean, number } from "yup";

const multiStepFromSchema = object({
  name: string().required("Name is a required field!"),
  email: string()
    .required("Email is a required field!")
    .email("Must be a valid email!"),
  phone: string().required("Phone is a required field!"),
  plan: string().oneOf(["arcade", "advanced", "pro"]).defined(),
  planMode: boolean().defined(),
  onlineSerivce: boolean().defined(),
  largeStorage: boolean().defined(),
  customizableProfile: boolean().defined(),
  totalPrice: number().defined(),
});

export { multiStepFromSchema };
