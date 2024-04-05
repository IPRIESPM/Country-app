import { Component } from '@angular/core'
import { CountryService } from '../../services/countries.service'
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ''
})

export class ByCapitalPageComponent {
  countries: Country[] = [];
  title: string = 'capital';
  isLoading: boolean = false;

  constructor(private countriesService: CountryService) { }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
