import { Component } from '@angular/core'
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ''
})

export class ByRegionPageComponent {
  countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  title: string = 'región';
  isLoading: boolean = false;
  selectedRegion?: Region;
  constructor(private countriesService: CountryService) { }

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.isLoading = true;
    this.countriesService.searchRegion(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
