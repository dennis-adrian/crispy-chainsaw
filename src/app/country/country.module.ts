import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalCityComponent } from './pages/by-capital-city/by-capital-city.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';

@NgModule({
  declarations: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
  exports: [
    ByCapitalCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule],
})
export class CountryModule {}
