import { createContext } from "react";

import type { FormContextType } from "../types";

const FormContext = createContext<FormContextType>({
  form: {
    planMode: "yearly",
    priceMode: "yr"
  },
  setForm: () => undefined
});

export { FormContext };
