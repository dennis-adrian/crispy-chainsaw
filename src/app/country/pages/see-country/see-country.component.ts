import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.countryService.getCountryByAlphaCode(params.id)
        )
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
