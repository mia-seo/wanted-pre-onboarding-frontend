export default class Todo {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async createTodo(todo) {
    return this.#createTodo(todo);
  }

  async getTodos() {
    return this.#getTodos();
  }

  async updateTodo(id, todo, isCompleted) {
    return this.#updateTodo(id, todo, isCompleted);
  }

  async deleteTodo(id) {
    return this.#deleteTodo(id);
  }

  async #createTodo(todo) {
    return this.apiClient
      .createTodo(todo)
      .then(() => "success")
      .catch(() => console.error);
  }

  async #getTodos() {
    return this.apiClient
      .getTodos()
      .then((res) => res.data)
      .catch(() => console.error);
  }

  async #updateTodo(id, todo, isCompleted) {
    return this.apiClient
      .updateTodo(id, todo, isCompleted)
      .then(() => "success")
      .catch(() => console.error);
  }

  async #deleteTodo(id) {
    return this.apiClient
      .deleteTodo(id)
      .then(() => "success")
      .catch(() => console.error);
  }
}
