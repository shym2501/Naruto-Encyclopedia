import { LitElement, html } from 'lit-element';
import * as bootstrap from 'bootstrap';

class SearchBar extends LitElement {
  static get styles() {
    return [bootstrap];
  }
  
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  /**
   * @param {any} event
   */
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowRoot.querySelector('#searchElement').value;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: white;
        }

        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid  #E14011;
          font-weight: bold;
        }

        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid  #E14011;
        }

        .search-container > input:focus::placeholder {
          font-weight: bold;
        }

        .search-container > input::placeholder {
          color:  #E14011;
          font-weight: normal;
        }

        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color:  #E14011;
          color: white;
          border: 0;
          text-transform: uppercase;
        }

        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: column;
            position: static;
          }

          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }

          .search-container > button {
            width: 100%;
          }
        }
      </style>
      
      <div class="search-container">
        <input placeholder="Search any character from Naruto" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowRoot.querySelector('#searchButtonElement')
        .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
