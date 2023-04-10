import "@testing-library/jest-dom.";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  planMode: true,
  customizableProfile: false,
  onlineSerivce: false,
  largeStorage: false,
  totalPrice: 0
};

const trigger = jest.fn();
const register = jest.fn();
const getValues = jest.fn(
  (name: keyof typeof defaultValues) => defaultValues[name]
);
const errors = {
  name: { message: "Name error" },
  email: { message: "Email error" },
  phone: { message: "Phone error" }
};
const changeStep = () => undefined;
