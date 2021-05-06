import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  searchTerm = '';
  isError = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  isShowSuggestions = false;

  constructor(private countryService: CountryService) {}

  search(searchTerm: any) {
    this.isError = false;
    this.searchTerm = searchTerm;
    this.isShowSuggestions = false;

    this.countryService.searchCountryByName(this.searchTerm).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  showSuggestions(term: string) {
    this.isError = false;
    this.searchTerm = term;
    this.isShowSuggestions = true;

    this.countryService.searchCountryByName(term).subscribe(
      (countries) => {
        this.suggestedCountries = countries.splice(0, 5);
      },
      (error) => {
        this.suggestedCountries = [];
      }
    );
  }
}
