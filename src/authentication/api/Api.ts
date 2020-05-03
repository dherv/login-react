import { IValues } from "../interfaces/interfaces";

export default class Api {
  private static url(environment: "production" | "development") {
    //TODO: add dev url if in dev mode. Move environment variable and dev_url to react context/provider
    return environment === "production"
      ? "https://auth-6wc6qghdha-an.a.run.app"
      : "http://localhost:4000";
  }

  static login(
    values: IValues,
    environment: "production" | "development"
  ): Promise<void> {
    return fetch(`${this.url(environment)}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ access_token, id }) => {
        localStorage.setItem("userId", id);
        localStorage.setItem("token", access_token);
        return;
      })
      .catch((error) => console.error(error));
  }

  static register(
    values: IValues,
    environment: "production" | "development"
  ): Promise<void> {
    return fetch(`${this.url(environment)}/auth/register`, {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        return this.login(values, environment);
      })
      .catch((error) => console.error(error));
  }
}
