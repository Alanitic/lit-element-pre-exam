import { LitElement, html } from 'lit-element';
import '@material/mwc-list';

class TodoList extends LitElement {
  render() {
    return html`
      <mwc-list>
        <mwc-check-list-item selected>Item 0</mwc-check-list-item>
        <mwc-check-list-item selected>Item 0</mwc-check-list-item>
        <mwc-check-list-item selected>Item 0</mwc-check-list-item>
      </mwc-list>
    `;
  }
}

customElements.define('todo-list', TodoList);
