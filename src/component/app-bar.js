class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .navbar-brand {
          padding-top: var(--bs-navbar-brand-padding-y);
          padding-bottom: var(--bs-navbar-brand-padding-y);
          margin-right: var(--bs-navbar-brand-margin-end);
          font-size: var(--bs-navbar-brand-font-size);
          color: var(--bs-navbar-brand-color);
          text-decoration: none;
          white-space: nowrap;
        }
        .navbar-brand:hover, .navbar-brand:focus {
          color: var(--bs-navbar-brand-hover-color);
        }

        .h1 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-weight: 500;
          line-height: 1.2;
          color: var(--bs-heading-color);
          font-size: calc(1rem + 1.5vw);
        }
        .text-white {
          --bs-text-opacity: 1;
          color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
        }
        .mb-0 {
          margin-bottom: 0 !important;
        }
      </style>
      <span class="navbar-brand text-white mb-0 h1 naruto-font">Naruto Encyclopedia</span>
    `;
  }
}

customElements.define('app-bar', AppBar);
