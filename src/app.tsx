import React, { useEffect, useState } from "react";

import MultiStepForm from "./components/MultiStepForm";

import type { MultiStepFormProps } from "./types";

const App = () => {
  const [pageProps, setPageProps] = useState<null | MultiStepFormProps>(null);

  useEffect(() => {
    const getPageProps = async () => {
      fetch(`${import.meta.env.BASE_URL}data/pagePropsMultiStepForm.json`)
        .then((response) => response.json())
        .then((data) => setPageProps(data));
    };

    getPageProps();

    return () => undefined;
  }, []);

  return (
    pageProps && (
      <MultiStepForm
        onSubmit={(data) => {
          console.log(data);
        }}
        steps={pageProps.steps}
      />
    )
  );
};

export default App;
