import { IValues } from "../interfaces/interfaces";

export default class Api {
  private static readonly url = "http://localhost:4000";

  static login(values: IValues): Promise<void> {
    return fetch(`${this.url}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ access_token, id }) => {
        localStorage.setItem("userId", id);
        localStorage.setItem("token", access_token);
        return;
      })
      .catch(error => console.error(error));
  }

  static register(values: IValues): Promise<void> {
    return fetch(`${this.url}/auth/register`, {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(() => {
        return this.login(values);
      })
      .catch(error => console.error(error));
  }
}
