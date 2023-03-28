import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Steps from "../Steps";
import { multiStepFromSchema } from "../../utils/schemas";

import type {
  UseFormRegister,
  UseFormGetValues,
  FieldErrors,
} from "react-hook-form";

import type { MultiStepFromSchema } from "../../utils/schemas";

import styles from "../../styles/components/multiStepFrom.module.scss";

interface StepProps<P extends Object = MultiStepFromSchema> {
  register: UseFormRegister<P>;
  getValues: UseFormGetValues<P>;
  errors: FieldErrors<P>;
}

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(0);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<MultiStepFromSchema>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      yearly: true,
      customizableProfile: false,
      onlineSerivce: false,
      largeStorage: false,
    },
    resolver: yupResolver(multiStepFromSchema),
    mode: "onChange",
  });

  return (
    <div id={styles.box}>
      <div id={styles.steps}>
        <nav>
          <ul>
            <li
              id={step == 0 ? styles.active : undefined}
              onClick={() => setStep(0)}
            >
              <label>STEP 1</label>
              <h3>YOUR INFO</h3>
            </li>
            <li
              id={step == 1 ? styles.active : undefined}
              onClick={() => setStep(1)}
            >
              <label>STEP 2</label>
              <h3>SELECT PLAN</h3>
            </li>
            <li
              id={step == 2 ? styles.active : undefined}
              onClick={() => setStep(2)}
            >
              <label>STEP 3</label>
              <h3>ADD-ONS</h3>
            </li>
            <li
              id={step == 3 ? styles.active : undefined}
              onClick={() => setStep(3)}
            >
              <label>STEP 4</label>
              <h3>SUMMARY</h3>
            </li>
          </ul>
        </nav>
      </div>
      <form>
        {step == 0 && (
          <Steps.YourInfo
            register={register}
            getValues={getValues}
            errors={errors}
          />
        )}
        {step == 1 && (
          <Steps.SelectYourPlan register={register} getValues={getValues} />
        )}
        {step == 2 && (
          <Steps.PickAddOns register={register} getValues={getValues} />
        )}
        {step == 3 && <Steps.Summary getValues={getValues} />}
      </form>
    </div>
  );
};

export type { StepProps };
export default MultiStepForm;
