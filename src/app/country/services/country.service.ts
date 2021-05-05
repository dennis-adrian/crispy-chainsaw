import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountryByName(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchTerm}`;
    return this.http.get<Country[]>(url);
  }

  searchCountryByCapitalCity(searchTerm: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${searchTerm}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlphaCode(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    const url = `https://restcountries.eu/rest/v2/region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
