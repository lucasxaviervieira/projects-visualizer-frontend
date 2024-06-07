class CurrentDateTime extends HTMLElement {
  connectedCallback() {
    this.updateDateTime();
    this.intervalId = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  disconnectedCallback() {

    clearInterval(this.intervalId);
  }

  updateDateTime() {
    const now = new Date();
    this.textContent = now.toLocaleString();
  }
}

customElements.define('current-date-time', CurrentDateTime);
