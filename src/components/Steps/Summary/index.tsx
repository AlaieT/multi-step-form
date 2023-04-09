import React, { useContext, useEffect } from "react";

import Button from "../../Button";
import Wrap from "../Wrap";

import type { SummaryProps } from "../../../types";

import styles from "../../../styles/components/steps/summary.module.scss";
import { FormContext } from "../../../utils/context";

const Summary = ({
  plans,
  addOns,
  isValid,
  setValue,
  getValues,
  changeStep
}: SummaryProps) => {
  const { form } = useContext(FormContext);
  const planType = getValues("plan");

  const totalPrice = plans[planType][form.planMode]
    + Object.keys(addOns)
      .map((key) => (getValues(key) ? addOns[key][form.planMode] : 0))
      .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    setValue("totalPrice", totalPrice, { shouldValidate: false });
    return () => undefined;
  }, [setValue, totalPrice]);

  return (
    <Wrap>
      <div id={styles.content}>
        <div id={styles.header}>
          <h1>Finishing up</h1>
          <h2>Double-check everything looks OK before confirming.</h2>
        </div>
        <div id={styles.info}>
          <div id={styles.plan}>
            <p>
              {planType}
              {" "}
              {form.planMode}
            </p>
            <Button id={styles.change_plan} onClick={() => changeStep(1)}>
              Change
            </Button>
            <p>{`$${plans[planType][form.planMode]}/${form.priceMode}`}</p>
          </div>
          {getValues("onlineSerivce") && (
            <div className={styles.add_ons}>
              <span>Online Service</span>
              <span>
                {`+ ${addOns.onlineSerivce[form.planMode]}/${form.priceMode}`}
              </span>
            </div>
          )}
          {getValues("largeStorage") && (
            <div className={styles.add_ons}>
              <span>Large Storage</span>
              <span>
                {`+ ${addOns.largeStorage[form.planMode]}/${form.priceMode}`}
              </span>
            </div>
          )}
          {getValues("customizableProfile") && (
            <div className={styles.add_ons}>
              <span>Customizable Profile</span>
              <span>
                {`+ ${addOns.customizableProfile[form.planMode]}/${form.priceMode}`}
              </span>
            </div>
          )}
        </div>
        <div id={styles.total}>
          <span>Total (per year)</span>
          <span>{`$${totalPrice}/${form.priceMode}`}</span>
        </div>
      </div>
      <div id={styles.controls}>
        <Button id={styles.go_back} type="button" onClick={() => changeStep(2)}>
          Go Back
        </Button>
        <Button id={styles.next_step} type="submit" disabled={!isValid}>
          Confirm
        </Button>
      </div>
    </Wrap>
  );
};

export default Summary;
