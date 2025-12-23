class NewPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>New Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <p>This is a new page.</p>

        <ion-icon name="heart"></ion-icon>
        <ion-icon name="logo-ionic"></ion-icon>

        <ion-button id="scroll-btn">
          Scroll to Bottom
        </ion-button>

        <div id="item-list"></div>
      </ion-content>
    `;

    this.setupScrolling();
  }

  setupScrolling() {
    customElements.whenDefined('ion-content').then(() => {
      const itemList = this.querySelector('#item-list');

      for (let i = 1; i <= 50; i++) {
        const item = document.createElement('ion-item');
        const label = document.createElement('ion-label');
        label.textContent = `Item ${i}`;
        item.appendChild(label);
        itemList.appendChild(item);
      }

      const scrollBtn = this.querySelector('#scroll-btn');
      const content = this.querySelector('ion-content');

      scrollBtn.addEventListener('click', () => {
        content.scrollToBottom(300);
      });
    });
  }
}

customElements.define('new-page', NewPage);
