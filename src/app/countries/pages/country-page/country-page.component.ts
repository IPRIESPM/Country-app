import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: `.badge{
    padding: 0.75rem 1.5rem;
  }`
})
export class CountryPageComponent implements OnInit {
  public country!: Country;


  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id)))
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl('/countries');
        this.country = country;
        return;
      })
  }
}
