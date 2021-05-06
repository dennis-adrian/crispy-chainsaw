import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  constructor(private http: HttpClient) {}

  searchCountryByName(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchTerm}`;
    return this.http.get<Country[]>(url, {
      params: this.httpParams,
    });
  }

  searchCountryByCapitalCity(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${searchTerm}`;
    return this.http.get<Country[]>(url, {
      params: this.httpParams,
    });
  }

  getCountryByAlphaCode(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    const url = `https://restcountries.eu/rest/v2/region/${region}`;

    return this.http.get<Country[]>(url, {
      params: this.httpParams,
    });
  }
}
