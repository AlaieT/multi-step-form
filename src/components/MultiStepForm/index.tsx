import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Steps from "../Steps";
import { multiStepFromSchema } from "../../utils/schemas";

import type { MultiStepFormProps, MFS } from "../../types";

import styles from "../../styles/components/multiStepFrom.module.scss";

const MultiStepForm = ({
  steps: { yourInfo, pickAddOns, selectYoutPlan, summary },
}: MultiStepFormProps) => {
  const [step, setStep] = useState<number>(0);
  const {
    register,
    getValues,
    setValue,
    formState: { errors, isValid, isSubmitted, isSubmitSuccessful },
    handleSubmit,
  } = useForm<MFS>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "arcade",
      planMode: true,
      customizableProfile: false,
      onlineSerivce: false,
      largeStorage: false,
      totalPrice: 0,
    },
    resolver: yupResolver(multiStepFromSchema),
    mode: "onChange",
  });

  const handleChangeStep = (step: number) => {
    if (step >= 0 && step < 4 && !isSubmitted && !isSubmitSuccessful) {
      setStep(step);
    }
  };

  return (
    <div id={styles.box}>
      <div id={styles.steps}>
        <nav>
          <ul>
            <li
              id={step == 0 ? styles.active : undefined}
              onClick={() => handleChangeStep(0)}
            >
              <label>STEP 1</label>
              <h3>YOUR INFO</h3>
            </li>
            <li
              id={step == 1 ? styles.active : undefined}
              onClick={() => handleChangeStep(1)}
            >
              <label>STEP 2</label>
              <h3>SELECT PLAN</h3>
            </li>
            <li
              id={step == 2 ? styles.active : undefined}
              onClick={() => handleChangeStep(2)}
            >
              <label>STEP 3</label>
              <h3>ADD-ONS</h3>
            </li>
            <li
              id={step == 3 ? styles.active : undefined}
              onClick={() => handleChangeStep(3)}
            >
              <label>STEP 4</label>
              <h3>SUMMARY</h3>
            </li>
          </ul>
        </nav>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {step == 0 && !isSubmitted && !isSubmitSuccessful && (
          <Steps.YourInfo
            {...yourInfo}
            register={register}
            getValues={getValues}
            errors={errors}
            changeStep={handleChangeStep}
          />
        )}
        {step == 1 && !isSubmitted && !isSubmitSuccessful && (
          <Steps.SelectYourPlan
            {...selectYoutPlan}
            register={register}
            getValues={getValues}
            changeStep={handleChangeStep}
          />
        )}
        {step == 2 && !isSubmitted && !isSubmitSuccessful && (
          <Steps.PickAddOns
            {...pickAddOns}
            register={register}
            getValues={getValues}
            changeStep={handleChangeStep}
          />
        )}
        {step == 3 && !isSubmitted && !isSubmitSuccessful && (
          <Steps.Summary
            {...summary}
            plans={selectYoutPlan.plans}
            addOns={pickAddOns.addOns}
            isValid={isValid}
            setValue={setValue}
            getValues={getValues}
            changeStep={handleChangeStep}
          />
        )}
        {isSubmitted && isSubmitSuccessful && <Steps.Finish />}
      </form>
    </div>
  );
};

export default MultiStepForm;
