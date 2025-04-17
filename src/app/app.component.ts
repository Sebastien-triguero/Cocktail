import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { seedData } from './shared/data/seed';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, CocktailsComponent],
  template: `
    <app-header />
    <app-cocktails class="flex-auto" />
    <app-footer />
  `,
  styles: `
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `,
})
export class AppComponent implements OnInit {
  private readonly apiUrl = 'https://restapi.fr/api/acocktails';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.checkAndSeedData();
  }

  private checkAndSeedData(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        if (Array.isArray(data) && data.length === 0) {
          seedData();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
