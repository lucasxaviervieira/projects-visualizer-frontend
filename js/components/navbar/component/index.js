async function readFile() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        sessionStorage.setItem('myString', xhr.responseText);
      } else {
        console.error('Error loading the file:', xhr.status);
      }
    }
  };
  xhr.open('GET', '/pages/components/navbar.html', true);
  xhr.send();
}

class Navbar extends HTMLElement {
  async connectedCallback() {
    await readFile()
    const fileString = sessionStorage.getItem('myString')
    this.innerHTML = fileString
  }
}

export async function navbarComponent() {
  customElements.define('navbar-component', Navbar);
}
