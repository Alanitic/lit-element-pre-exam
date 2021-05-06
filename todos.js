import { LitElement, html } from 'lit-element';

class TodoList extends LitElement {
  render() {
    return html` <div>Hello from MyElement!</div> `;
  }
}

customElements.define('todo-list', TodoList);
