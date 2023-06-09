import Swal from "sweetalert2";

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
    return this.apiClient
      .signup(email, password)
      .then(() => true)
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "이미 존재하는 아이디입니다.",
        });
        return false;
      });
  }
  async #signin(email, password) {
    return this.apiClient
      .signin(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        return res.data.access_token;
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "아이디와 비밀번호가 일치하지 않습니다.",
        });
        return false;
      });
  }
}
