class CharItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  /**
   * @param {any} char
   */
  set char(char) {
    this._char = char;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff;
        }
        .fan-art-char {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .char-info {
          padding: 24px;
        }
        .char-info > h2 {
          font-weight: border;
        }
        .char-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="fan-art-char" src="${this._char.images}" alt="Fan Art">
      <div class="char-info">
        <h2>${this._char.name}</h2>
      </div>
    `;
  }
}

customElements.define('char-item', CharItem);
