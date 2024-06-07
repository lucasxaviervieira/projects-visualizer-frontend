class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav
      class="bg-gray-100 border-slate-200 border-b p-5 h-[12%] flex items-center"
    >
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center">
          <a href="linkToStart">
            
          </a>
          <div class="px-3">
            <h1 class="text-xs lg:text-sm 2xl:text-3xl font-bold">
              <a href="linkToStart"> Ambiente de Teste</a>
            </h1>
          </div>
        </div>
        <div class="hidden md:ml-6 md:block">
          <div class="relative inline-block">
            <button
              type="button"
              class="inline-flex justify-center items-center px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-gray-700"
              data-dropdown-toggle="dropdown"
            >
              opcoes
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.293l4.293-4.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414-1.414L10 12.293l-4.293-4.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class="absolute z-10 hidden w-48 origin-top right-0 mt-2 rounded-md shadow-sm bg-white"
            >
              <ul class="py-1 divide-y divide-gray-200">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 focus:outline-none"
                  >
                    $x
                  </a>
                </li>
                ;
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 focus:outline-none"
                  >
                    $x
                  </a>
                </li>
                ;
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 focus:outline-none"
                  >
                    $x
                  </a>
                </li>
                ;
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
  }
}

customElements.define('navbar-component', Navbar);