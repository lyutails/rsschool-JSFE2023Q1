export class QeteqTag extends HTMLElement {
  public connectedCallback(): void {
    const qeteq = document.createElement('div');
    qeteq.setAttribute('class', 'qeteq');
    qeteq.classList.add('qeteq');
    this.shadowRoot?.append(qeteq);
  }
}

const qeteq = customElements.define('qeteq-tag', QeteqTag);
