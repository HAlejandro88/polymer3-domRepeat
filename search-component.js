import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/polymer/lib/elements/dom-repeat.js'
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';

/**
 * `search-component`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SearchComponent extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .off {
          background: #d2d2d2;
          }
        .container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .card {
          width: 400px;
          height: auto;
          margin: 10px;
          }
      </style>
      <h2> [[size]] villanos Eliminados</h2>
      <paper-input label="buscar" value="{{searchName}}"  on-keyup="searchPokemon"></paper-input>
      <template is="dom-repeat" items="{{employees}}">
        <paper-card image="{{item.image}}" class$="{{item.status}}">
          <div class="card-content">
            <div class="cafe-header">Nombre: {{item.firstName}} {{item.lastName}}
            </div>
            <p>Edad: {{item.age}}</p>
            <p>
              Herramienta: {{item.herramienta}}
            </p>
          </div>
          <div class="card-actions">
            <div class="horizontal justified">
              <paper-button on-tap="show">Mostrar</paper-button>
            </div>
          </div>
        </paper-card>
    </template>
    `;
  }
  static get properties() {
    return {
      searchName: {
        type: String,
        value: ''
      },
      size:{
        type: Number,
        computed: "_getUsersListSize(users)"
      },
      employees: {
        type: Array,
        value:[]  
      }
    };
  }
  searchPokemon(event){
    this.dispatchEvent(new CustomEvent("list-search",{
      bubbles:false,
      composed:false,
      detail:this.searchName
    }))
  }

  _getUsersListSize(users) {
    return users.filter(user => user.status === 'on').lenght
  }

  show(event) {
    this.dispatchEvent(new CustomEvent('user-selected',{
      bubbles:false,
      composed: false,
      detail: event.model.user
    }));
  }

  
}

window.customElements.define('search-component', SearchComponent);
