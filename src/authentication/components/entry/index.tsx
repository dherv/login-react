import React, { FC } from "react";
import { FormikProps, Formik } from "formik";
import EntryButton from "./EntryButton";
import EntryInput from "./EntryInput";
import { SC } from "./index.styled";
import { validation } from "../../validation/validation";
import { IEntryData, IValues } from "../../interfaces/interfaces";
import { v1 as uuidv1 } from "uuid";

const Entry: FC<{
  data: IEntryData;
  validationSchema: string;
  callback: () => void;
}> = ({
  data: { initialValues, components, request },
  validationSchema,
  callback
}) => {
  return (
    <Formik
      key={uuidv1()}
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validation.get(validationSchema)}
      onSubmit={(values, actions) => {
        request(values).then(() => {
          actions.setSubmitting(false);
          callback();
        });
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
