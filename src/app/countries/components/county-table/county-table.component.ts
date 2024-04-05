import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './county-table.component.html',
  styles: ``
})
export class CountyTableComponent {
  @Input() countries: Country[] = [];
}
