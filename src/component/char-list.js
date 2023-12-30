import './char-item.js';

class CharList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  /**
   * @param {any} chars
   */
  set chars(chars) {
    this._chars = chars;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._chars.forEach(char => {
      const charItemElement = document.createElement('char-item');
      charItemElement.char = char;
      this.shadowDOM.appendChild(charItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('char-list', CharList);
