import {Injectable, resource} from '@angular/core';
import * as process from 'node:process';
import {Cocktail} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  BASE_URL = 'https://restapi.fr/api/acocktails';

  cocktailsResource = resource({
    loader: async (): Promise<Cocktail[]> =>
      (await fetch(this.BASE_URL)).json()
  })

  constructor() { }
}
