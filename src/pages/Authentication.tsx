import React, { useState, FC } from "react";
import Entry from "../components/entry";
import { SCG } from "../styled/GlobalComponents";
import { IEntryData } from "../interfaces/interfaces";

const data: Map<string, IEntryData> = new Map([
  [
    "Login",
    {
      initialValues: { firstName: "", lastName: "", email: "" },
      components: [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "email", label: "Email address", type: "email" }
      ]
    }
  ],
  [
    "Register",
    {
      initialValues: { firstName: "", lastName: "", email: "", password: "" },
      components: [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "email", label: "Email address", type: "email" },
        { name: "password", label: "password", type: "password" }
      ]
    }
  ]
]);

const Authentication: FC<{ backgroundColor: string; title: string }> = ({
  backgroundColor,
  title
}) => {
  const [state, setState] = useState<boolean>(true);
  return (
    <SCG.Main backgroundColor={backgroundColor}>
      <SCG.Container>
        <SCG.Title>{title}</SCG.Title>
        <h4>{state ? "Sign In" : "Register"}</h4>
        {state ? (
          <Entry data={data.get("Login")} />
        ) : (
          <Entry data={data.get("Register")} />
        )}
        <button onClick={() => setState(!state)}>switch</button>
      </SCG.Container>
    </SCG.Main>
  );
};

export default Authentication;
