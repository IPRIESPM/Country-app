import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private url: string = "https://restcountries.com/v3.1/"
  cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: []
    },
    byCountries: {
      term: '',
      countries: []
    },
    byRegion: {
      region: '',
      countries: []
    },
  }
  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.url}capital/${term}`)
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.url}name/${term}`)
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.url}region/${term}`)
  }

  searchCountryByAlphaCode(term: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.url}alpha/${term}`)
      .pipe(
        map((country: Country[]) => country.length > 0 ? country[0] : null),
        catchError(error => of(null))
      )
  }
}
