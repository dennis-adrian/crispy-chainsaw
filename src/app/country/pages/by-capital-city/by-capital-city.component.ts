import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-city',
  templateUrl: './by-capital-city.component.html',
  styles: [
  ]
})
export class ByCapitalCityComponent {

  searchTerm = '';
  isError = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(searchTerm: any) {
    this.isError = false;
    this.searchTerm = searchTerm;

    this.countryService.searchCountryByCapitalCity(this.searchTerm).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  showSuggestions(event: any) {
    this.isError = false;
  }

}
