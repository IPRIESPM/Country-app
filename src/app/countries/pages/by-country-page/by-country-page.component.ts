import { Component } from '@angular/core'
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ''
})
export class ByCountryPageComponent {
  countries: Country[] = [];
  title: string = 'país';
  isLoading: boolean = false;
  constructor(private countriesService: CountryService) { }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
