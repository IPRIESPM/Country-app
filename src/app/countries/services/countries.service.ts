import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private url: string = "https://restcountries.eu/v3.1/"
  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    term = "capital/san";
    return this.http.get<Country[]>(`${this.url}capital/${term}`)
  }
}
