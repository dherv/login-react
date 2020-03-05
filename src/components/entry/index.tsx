import React, { FC } from "react";
import { FormikProps, Formik } from "formik";
import EntryButton from "./EntryButton";
import EntryInput from "./EntryInput";
import { SC } from "./index.styled";
import { validation } from "../../validation/validation";
import { LoginValues, RegisterValues } from "../../interfaces/interfaces";

const Entry: FC<{ data: any }> = ({ data: { initialValues, components } }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation.get("LoginSchema")}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<LoginValues | RegisterValues>) => (
        <SC.Form>
          {components.map(
            ({ name, label }: { name: string; label: string }) => (
              <EntryInput key={name} name={name} type="text" label={label} />
            )
          )}
          <EntryButton />
        </SC.Form>
      )}
    </Formik>
  );
};

export default Entry;
