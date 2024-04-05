import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private url: string = "https://restcountries.com/v3.1/"

  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}capital/${term}`)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}name/${term}`)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}region/${term}`)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchCountryByAlphaCode(term: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.url}alpha/${term}`)
      .pipe(
        map((country: Country[]) => country.length > 0 ? country[0] : null),
        catchError(error => of(null))
      )
  }
}
