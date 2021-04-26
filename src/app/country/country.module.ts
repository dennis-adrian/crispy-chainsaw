import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalCityComponent } from './pages/by-capital-city/by-capital-city.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';

@NgModule({
  declarations: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeCountryComponent,
    CountriesTableComponent,
    CountriesInputComponent,
  ],
  exports: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CountryModule {}
