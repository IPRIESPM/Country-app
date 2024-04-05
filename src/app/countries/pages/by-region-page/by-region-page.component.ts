import { Component } from '@angular/core'
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ''
})
export class ByRegionPageComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountryService) { }

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
