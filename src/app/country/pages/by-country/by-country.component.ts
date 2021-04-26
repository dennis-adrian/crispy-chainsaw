import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  searchTerm = '';
  isError = false;

  constructor(private countryService: CountryService) {}

  search() {
    this.isError = false;
    this.countryService.searchCountry(this.searchTerm).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        this.isError = true;
        console.log('Error');
        console.info(error);
      }
    );
  }
}
