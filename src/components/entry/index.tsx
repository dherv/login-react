import React, { FC } from "react";
import { FormikProps, Formik } from "formik";
import EntryButton from "./EntryButton";
import EntryInput from "./EntryInput";
import { SC } from "./index.styled";
import { validation } from "../../validation/validation";
import { IEntryData, IValues } from "../../interfaces/interfaces";
import { v1 as uuidv1 } from "uuid";

const Entry: FC<{ data: IEntryData }> = ({
  data: { initialValues, components }
}) => {
  return (
    <Formik
      key={uuidv1()}
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validation.get("LoginSchema")}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<IValues>) => (
        <SC.Form>
          {components.map(({ name, label, type }) => (
            <EntryInput key={name} name={name} type={type} label={label} />
          ))}
          <EntryButton />
        </SC.Form>
      )}
    </Formik>
  );
};

export default Entry;
