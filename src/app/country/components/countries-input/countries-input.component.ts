import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: [],
})
export class CountriesInputComponent {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  searchTerm = '';

  constructor() {}

  search() {
    this.onSearch.emit(this.searchTerm);
  }
}
