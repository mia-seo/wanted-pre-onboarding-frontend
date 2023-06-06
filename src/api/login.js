export default class Login {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async signup(email, password) {
    return this.#signup(email, password);
  }
  async signin(email, password) {
    return this.#signin(email, password);
  }

  async #signup(email, password) {
    return this.apiClient.signup(email, password).catch(console.error);
  }
  async #signin(email, password) {
    return this.apiClient
      .signin(email, password)
      .then((res) => res.data)
      .catch(console.error);
  }
}
