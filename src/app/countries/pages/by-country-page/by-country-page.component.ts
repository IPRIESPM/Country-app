import { Component } from '@angular/core'
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ''
})
export class ByCountryPageComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountryService) { }

  searchByCountry(term: string): void {
    term = "name/" + term;
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
