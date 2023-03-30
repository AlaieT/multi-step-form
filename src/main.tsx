import React from "react";
import ReactDOM from "react-dom/client";

import MultiStepForm from "./components/MultiStepForm";

import type { MultiStepFormProps } from "./types";

import IconArcade from "../public/images/icon-arcade.svg";
import IconAdvanced from "../public/images/icon-advanced.svg";
import IconPro from "../public/images/icon-pro.svg";

import "./styles/global.scss";

const pageProps: MultiStepFormProps = {
  steps: {
    yourInfo: {
      title: "Personal info",
      subTitle: "Please provide your name, email address, and phone number.",
    },
    selectYoutPlan: {
      title: "Select your plan",
      subTitle: "You have the option of monthly or yearly billing.",
      plans: {
        arcade: {
          label: "Arcade",
          pricing: {
            monthly: 9,
            yearly: 90,
          },
          image: IconArcade,
        },
        advanced: {
          label: "Advanced",
          pricing: {
            monthly: 12,
            yearly: 120,
          },
          image: IconAdvanced,
        },
        pro: {
          label: "Pro",
          pricing: {
            monthly: 15,
            yearly: 150,
          },
          image: IconPro,
        },
      },
    },
    pickAddOns: {
      title: "Pick add-ons",
      subTitle: "Add-ons help enhance your gaming experience.",
      addOns: {
        onlineSerivce: {
          label: "Online service",
          discription: "Access to multiplayer games",
          pricing: {
            monthly: 1,
            yearly: 10,
          },
        },
        largeStorage: {
          label: "Larger storage",
          discription: "Extra 1TB of cloud save",
          pricing: {
            monthly: 2,
            yearly: 20,
          },
        },
        customizableProfile: {
          label: "Customizable profile",
          discription: "Custom theme on your profile",
          pricing: {
            monthly: 3,
            yearly: 30,
          },
        },
      },
    },
    summary: {
      title: "Finishing up",
      subTitle: "Double-check everything looks OK before confirming.",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MultiStepForm {...pageProps} />
  </React.StrictMode>
);
