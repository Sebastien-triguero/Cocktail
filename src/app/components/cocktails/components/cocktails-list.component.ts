import {Component, computed, input, output, signal} from '@angular/core';
import {Cocktail} from '../../../shared/interfaces';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cocktails-list',
  imports: [FormsModule],
  template: `
    <h2 class="mb-20">Liste des cocktails</h2>
    <!-- Bar de recherche pour filter les cocktails -->
    <input
      [(ngModel)]="filter"
      type="text" class="mb-20 w-full"
           placeholder="Chercher un cocktail" />
    <ul class="mb-20">
      @for (cocktail of filteredCocktails(); track cocktail.name) {
        @let active = cocktail.name === selectedCocktailName();
        <li [class.active-item]="active"
            [class.text-primary]="active"
            (click)="selectCocktail.emit(cocktail.name)"
            class="px-12 py-6 my-2 radius">
          <h3>{{ cocktail.name }}</h3>
        </li>
      }
    </ul>
    <button class="btn btn-primary">Ajouter un cocktail</button>
  `,
  styles: ` li:hover {
    cursor: pointer;
    background-color: var(--light);
    transition: all 0.4s;
  }`
})

export class CocktailsListComponent {
  filter = signal('');
  filteredCocktails = computed(() =>
    this.cocktails()?.filter(({name}) =>
    name.toLowerCase().includes(this.filter().toLowerCase())));

  //définit une propriété d'entrée appelée cocktails, qui attend un tableau d'objets Cocktail.
  // ce tableau est transmis par le parent via le binding [cocktails].
  cocktails = input<Cocktail[]>();

  // cela crée une propriété d'entrée obligatoire nommée selectedCocktailName. Le parent doit fournir une valeur,
  // sinon Angular génère une erreur. Cette propriété est utilisée pour identifier quel cocktail est actuellement
  // sélectionné, comparé à cocktail.name dans la directive *for.
  selectedCocktailName = input.required();

  // cela définit un événement nommé selectCocktail qui émet des valeurs de type string.
  // lorsqu'un élément de la liste est cliqué, la méthode (click)="selectCocktail.emit(cocktail.name)"
  // déclenche l'événement en envoyant le nom du cocktail sélectionné (cocktail.name).
  selectCocktail = output<string>();

}
