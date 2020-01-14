import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import  './search-component.js'

/**
 * `LocalidadElement` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class LocalidadElement extends PolymerElement {
    static get properties() {
        return {
            line: {
                type: Array,
                value: ['hola','holi']
            }   
        }
    }

    static get template() {
        return html`
        ${this.line.map(box=>html`<div>${box}</div>`)}
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.line = ['hol','holi']
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }
}

customElements.define('localidad-element', LocalidadElement);