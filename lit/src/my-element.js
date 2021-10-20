import { html, LitElement } from "lit";

import "./custom-list";

export class MyElement extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  constructor() {
    super();
    this.todos = [
      { id: 1, name: "Buy milk", done: true },
      { id: 2, name: "File taxes", done: false },
      { id: 3, name: "Fix bug in production", done: true },
    ];
  }

  render() {
    const renderItem = (item) => html`
      <input type="checkbox" .checked=${item.done} id=${`item1-${item.id}`} />
      <label for=${`item1-${item.id}`}>${item.name}</label>
    `;

    return html`
      <button @click=${this._onClick} part="button">Add todo item</button>
      <custom-list .items=${this.todos} .itemKey=${(item) => item.id} .renderItem=${renderItem}>
      </custom-list>
    `;
  }

  _onClick() {
    this.todos = [
      ...this.todos,
      {
        id: this.todos.length + 1,
        name: "Do something else",
        done: true,
      },
    ];
  }
}

window.customElements.define("my-element", MyElement);
