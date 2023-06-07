import axios from "axios";

export default class TodoClient {
  constructor(token) {
    this.UpdateClient = axios.create({
      baseURL: "https://www.pre-onboarding-selection-task.shop",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    this.GetDeleteClient = axios.create({
      baseURL: "https://www.pre-onboarding-selection-task.shop",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createTodo(todo) {
    return this.UpdateClient.post("/todos", { todo });
  }

  async getTodos() {
    return this.GetDeleteClient.get("/todos");
  }

  async updateTodo(id, todo, isCompleted) {
    return this.UpdateClient.put(`/todos/${id}`, { todo, isCompleted });
  }

  async deleteTodo(id) {
    return this.UpdateClient.delete(`/todos/${id}`);
  }
}
