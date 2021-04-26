import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  searchTerm = '';
  isError = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(searchTerm: any) {
    this.isError = false;
    this.searchTerm = searchTerm;

    this.countryService.searchCountry(this.searchTerm).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
}
