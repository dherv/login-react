import React, { useState, FC } from "react";
import Entry from "./components/entry";
import { SCG } from "./styled/GlobalComponents";
import { IEntryData } from "./interfaces/interfaces";
import { GlobalStyle } from "./styled/GlobalStyle";

const data: Map<string, IEntryData> = new Map([
  [
    "Login",
    {
      initialValues: { username: "", password: "" },
      components: [
        { name: "username", label: "username", type: "text" },
        { name: "password", label: "password", type: "password" }
      ]
    }
  ],
  [
    "Register",
    {
      initialValues: { username: "", email: "", password: "" },
      components: [
        { name: "username", label: "username", type: "text" },
        { name: "email", label: "Email address", type: "email" },
        { name: "password", label: "password", type: "password" }
      ]
    }
  ]
]);

const Authentication: FC<{
  backgroundColor: string;
  title: string;
  url: string;
}> = ({ backgroundColor, title, url }) => {
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
              url={url}
            />
          ) : (
            <Entry
              data={data.get("Register")}
              validationSchema="RegisterSchema"
              url={url}
            />
          )}
          <button onClick={() => setState(!state)}>switch</button>
        </SCG.Container>
      </SCG.Main>
    </>
  );
};

export default Authentication;
