import React, { useState, FC } from "react";
import Entry from "./components/entry";
import { SCG } from "./styled/GlobalComponents";
import { IEntryData, IValues } from "./interfaces/interfaces";
import { GlobalStyle } from "./styled/GlobalStyle";
import Api from "./api/Api";

const data: Map<string, IEntryData> = new Map([
  [
    "Login",
    {
      initialValues: { username: "", password: "" },
      components: [
        { name: "username", label: "username", type: "text" },
        { name: "password", label: "password", type: "password" },
      ],
      request(
        values: IValues,
        environment: "production" | "development"
      ): Promise<void> {
        return Api.login(values, environment);
      },
    },
  ],
  [
    "Register",
    {
      initialValues: { username: "", email: "", password: "" },
      components: [
        { name: "username", label: "username", type: "text" },
        { name: "email", label: "Email address", type: "email" },
        { name: "password", label: "password", type: "password" },
      ],
      request(
        values: IValues,
        environment: "production" | "development"
      ): Promise<void> {
        return Api.register(values, environment);
      },
    },
  ],
]);

const Authentication: FC<{
  backgroundColor: string;
  environment: "production" | "development";
  title: string;
  callback: () => void;
}> = ({ backgroundColor, title, callback, environment }) => {
  const [state, setState] = useState<boolean>(true);
  return (
    <>
      <GlobalStyle />
      <SCG.Main backgroundColor={backgroundColor}>
        <SCG.Container>
          <SCG.Title>{title}</SCG.Title>
          <h4>{state ? "Sign In" : "Register"}</h4>
          {state ? (
            <Entry
              data={data.get("Login")}
              validationSchema="LoginSchema"
              environment={environment}
              callback={callback}
            />
          ) : (
            <Entry
              data={data.get("Register")}
              validationSchema="RegisterSchema"
              environment={environment}
              callback={callback}
            />
          )}
          <button onClick={() => setState(!state)}>switch</button>
        </SCG.Container>
      </SCG.Main>
    </>
  );
};

export default Authentication;
