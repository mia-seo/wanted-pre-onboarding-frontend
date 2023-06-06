import axios from "axios";

export default class LoginClient {
  constructor() {
    this.AuthClient = axios.create({
      baseURL: "https://www.pre-onboarding-selection-task.shop",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async signup(email, password) {
    return this.AuthClient.post("/auth/signup", { email, password });
  }

  async signin(email, password) {
    return this.AuthClient.post("/auth/signin", { email, password });
  }
}
