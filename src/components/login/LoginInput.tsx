import React, { FC } from "react";
import { useField } from "formik";

const LoginInput: FC<{ label: string; name: string; type: string }> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default LoginInput;
