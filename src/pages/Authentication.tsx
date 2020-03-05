import React, { useState } from "react";
import Entry from "../components/entry";
import { SCG } from "../styled/GlobalComponents";

const data = new Map([
  [
    "Login",
    {
      initialValues: { firstName: "", lastName: "", email: "" },
      components: [
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "email", label: "Email address" }
      ]
    }
  ],
  [
    "Register",
    {
      initialValues: { firstName: "", lastName: "", email: "", password: "" },
      components: [
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "email", label: "Email address" },
        { name: "password", label: "password" }
      ]
    }
  ]
]);

const Authentication = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <SCG.Main>
      <SCG.Container>
        <SCG.Title>Watchers</SCG.Title>
        <h4>Signin</h4>
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
