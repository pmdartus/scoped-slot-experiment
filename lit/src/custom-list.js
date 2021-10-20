import { LitElement, html } from "lit";
import { repeat } from "lit/directives/repeat.js";

class CustomList extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
      itemKey: { type: Function },
      renderItem: { type: Function },
    };
  }

  render() {
    return html`
      <ul>
      ${repeat(this.items, this.itemKey, (item) => html`
        <li>${this.renderItem(item)}</li>
      `)}
      </ul>
    `
  }
}

customElements.define("custom-list", CustomList);
