import { Component } from '@angular/core'
import { CountryService } from '../../services/countries.service'
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ''
})

export class ByCapitalPageComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountryService) { }

  searchByCapital(term: string): void {
    term = "capital/" + term;
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
