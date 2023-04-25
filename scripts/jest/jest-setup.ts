import "@testing-library/jest-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { multiStepFromSchema } from "../../src/utils/schemas";

global.getStepProps = () => ({
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
  },
  addOns: {
    onlineService: {
      monthly: 1,
      yearly: 10
    },
    largeStorage: {
      monthly: 2,
      yearly: 20
    },
    customizableProfile: {
      monthly: 3,
      yearly: 30
    }
  }
});

global.getUseFormProps = () => ({
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
});
