import React, { FC } from "react";
import { useField } from "formik";
import { SCG } from "../../styled/GlobalComponents";

const EntryInput: FC<{ label: string; name: string; type: string }> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <SCG.Label>
        {label}
        <SCG.Input {...field} {...props} />
      </SCG.Label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default EntryInput;
