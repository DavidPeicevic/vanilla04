class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <div id="container">
          <strong>Ready to create an app?</strong>
          <p>
            Start with Ionic
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ionicframework.com/docs/components"
            >
              UI Components
            </a>
          </p>

          <ion-button href="/new">
            Go to new page
          </ion-button>
        </div>
      </ion-content>
    `;
  }
}

customElements.define('home-page', HomePage);
