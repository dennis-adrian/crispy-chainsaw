import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: [],
})
export class CountriesInputComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  searchTerm = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onSearch.emit(this.searchTerm);
  }

  keyPressed() {
    this.debouncer.next(this.searchTerm);
  }
}
