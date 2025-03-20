import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header.component';
import {CocktailDetailsComponent} from './components/cocktails/components/cocktail-details.component';
import {FooterComponent} from './components/footer.component';
import {CocktailsComponent} from './components/cocktails/cocktails.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    CocktailsComponent,
    FooterComponent,
  ],
  template: `
  <app-header/>
  <app-cocktails class="flex-auto"/>
  <app-footer/>
  `,
  styles: `
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }`
})
export class AppComponent {
  title = 'ProjetCocktails';
}
