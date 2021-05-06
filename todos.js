import { LitElement, html, css } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-list';
import '@material/mwc-icon';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-check-list-item';

class TodoList extends LitElement {
  render() {
    return html`
      <mwc-textfield outlined label="Tarea"></mwc-textfield>
      <mwc-button outlined label="Agregar"></mwc-button>
      <mwc-list multi id="checklist">
        <mwc-check-list-item graphic="avatar" selected
          >Item 0
          <mwc-icon slot="graphic">delete</mwc-icon></mwc-check-list-item
        >
      </mwc-list>
    `;
  }
  static get styles() {
    return css`
      div {
        color: red;
      }
    `;
  }
}

customElements.define('todo-list', TodoList);
