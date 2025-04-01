import {Component, computed, effect, signal} from '@angular/core';
import {CocktailsListComponent} from './components/cocktails-list.component';
import {CocktailDetailsComponent} from './components/cocktail-details.component';
import {cocktails} from '../../shared/data';
import {Cocktail} from '../../shared/interfaces';

@Component({
  selector: 'app-cocktails',
  imports: [
    CocktailsListComponent,
    CocktailDetailsComponent
  ],
  template: `
    <app-cocktails-list
      [selectedCocktailName]="selectedCocktailName()"
      class="w-half xs-w-full card"
      (selectCocktail)="selectCocktail($event)"
      [cocktails]="cocktails()"/>
    <app-cocktail-details class="w-half xs-w-full card" [cocktail]="selectedCocktail()"/>
  `,
  styles: `
    :host {
      display: flex;
      gap: 24px;
      padding: 24px;
      @media screen and (max-width: 820px) {
        flex-direction: column;
      }
    }
  `
})
export class CocktailsComponent {
  //Ce signal contient la liste des cocktails importée depuis les données partagées (app/shared/data).
  // En l'appelant avec cocktails(), vous obtenez la valeur actuelle de la liste des cocktails.
  cocktails = signal<Cocktail[]>(cocktails);

  //Ce signal contient le cocktail actuellement sélectionné. Il est initialisé avec le premier cocktail de la liste.
  // Ce signal est mis à jour dans la méthode selectCocktail pour refléter le cocktail sélectionné par l'utilisateur.
  selectedCocktail = signal<Cocktail>(this.cocktails()[0]);

  //Ce computed dérive la propriété name du cocktail actuellement sélectionné (selectedCocktail).
  //Si le signal selectedCocktail change, selectedCocktailName se met automatiquement à jour pour refléter le nouveau nom.
  selectedCocktailName = computed(() => this.selectedCocktail().name);

  selectCocktail(cocktailName: string) {
    console.log(cocktailName);
    const newCocktail = this.cocktails().find(({name}) => name === cocktailName);
    if (newCocktail) {
      this.selectedCocktail.set(newCocktail);
    }
  }

  constructor() {
    effect(() => {
      console.log(this.selectedCocktail);
    });
  }

}
