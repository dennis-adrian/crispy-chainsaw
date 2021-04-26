import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(searchTerm: string): Observable<any> {
    const url = `${this.apiUrl}/name/${searchTerm}`;
    return this.http.get(url);
  }
}
