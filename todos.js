import { LitElement, html, css } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-list';
import '@material/mwc-icon';
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-check-list-item';

class TodoList extends LitElement {
  constructor() {
    super();
    this.itemList = ['ejemplo', 'prueba'];
  }

  static get properties() {
    return {
      itemList: { type: Array },
    };
  }

  render() {
    return html`
      <mwc-textfield
        @keyup=${this._typeInput}
        id="task"
        outlined
        label="Tarea"
      ></mwc-textfield>
      <mwc-button
        id="addTask"
        disabled
        @click=${this._addTask}
        outlined
        label="Agregar"
      ></mwc-button>
      <mwc-list multi id="checklist" @click=${this._removeTask}>
        ${this.itemList.map((item) => {
          return html`
            <mwc-check-list-item graphic="avatar"
              >${item}
              <mwc-icon slot="graphic">delete</mwc-icon></mwc-check-list-item
            >
          `;
        })}
      </mwc-list>
    `;
  }
  static get styles() {
    return css`
      mwc-textfield {
        width: 100%;
        margin: 1vh 0px;
      }
      mwc-button {
        width: 100%;
        margin: 1vh 0px;
      }
    `;
  }

  _addTask() {
    this.itemList.push(this.inputEl.value);
    console.log(this.itemList);
    this.requestUpdate();
  }

  _removeTask(e) {
    if (e.target.tagName === 'MWC-ICON') {
      console.log(e);
    }
  }

  _typeInput() {
    if (this.inputEl.value.length > 0) {
      this.buttonEl.removeAttribute('disabled');
    } else {
      this.buttonEl.setAttribute('disabled', '');
    }
  }

  get inputEl() {
    return this.shadowRoot.getElementById('task');
  }
  get buttonEl() {
    return this.shadowRoot.getElementById('addTask');
  }
}

customElements.define('todo-list', TodoList);
