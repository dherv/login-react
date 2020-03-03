import React from "react";
import Layout from "../components/layout/Layout";
import { SCG } from "../styled/GlobalComponents";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <Layout>
      <SCG.Container>
        <LoginForm />
      </SCG.Container>
    </Layout>
  );
};

export default Login;
