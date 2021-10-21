import { LightningElement, track } from "lwc";

import itemTmpl from "./item.html";

export default class App extends LightningElement {
  @track todos = [
    { id: 1, name: "Buy milk", done: true },
    { id: 2, name: "File taxes", done: false },
    { id: 3, name: "Fix bug in production", done: true },
  ];

  itemTmpl = itemTmpl;

  get mappedTodos() {
    return this.todos.map(todo => {
      return {
        ...todo,
        idRef: `item-${todo.id}`
      }
    })
  }

  addTodo() {
    this.todos.push({
      id: this.todos.length + 1,
      name: "Do something else",
      done: true,
    });
  }
}
