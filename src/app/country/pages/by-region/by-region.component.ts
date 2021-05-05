import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {
    this.activeRegion = region;
  }

  getClassCSS(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  getCountriesByRegion(region: string) {
    if (region === this.activeRegion) return;

    this.activateRegion(region);

    this.countryService
      .getCountriesByRegion(this.activeRegion)
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}
