import React from 'react';
import { render as renderReact } from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import App from './App';


(function() {
  window.addEventListener('WebComponentsReady', () => {
      
		class MyApp extends HTMLElement {
			
			constructor() {
				super();
				this.shadow = this.attachShadow({ mode: 'closed' });
				this.shadowDocument = { ...this };
			}

			static get observedAttributes() {
				return [ 'name' ];
			}

			connectedCallback() {
				const template = `
					<style>
						@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
					</style>
                    <div id="root">
                    </div>
				`;
				this.shadow.innerHTML = template;
				this.render();
				retargetEvents(this.shadow);
			}
			
			render() {
                renderReact(
                    <App name={ this.getAttribute('name') } />, this.shadow.getElementById('root')
                );
			}
		}
		
		window.customElements.define('custom-component', MyApp);
  });
})();