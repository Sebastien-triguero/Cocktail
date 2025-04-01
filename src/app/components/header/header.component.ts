import { Component } from '@angular/core';
import {HeaderMenuComponent} from './component/header-menu.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderMenuComponent
  ],
  template: `
    <h3 class="flex-auto text-bold text-lg">Cocktails</h3>
    <ul class="xs-hide flex flex-row gap-16">
      <li>
        <a href="#">Liste des cocktails</a>
      </li>
      <li>
        <a href="#">Panier</a>
      </li>
    </ul>
    <app-header-menu class="hide xs-show" />
  `,
  styles: `
  :host {
    display: flex;
    align-items: center;
    background-color: var(--primary);
    color: white;
    height: 56px;
    padding: 0 16px;
  }
  `
})
export class HeaderComponent {

}
