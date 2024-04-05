import { Component } from '@angular/core'

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ''
})
export class ByCapitalPageComponent {

  searchByCapital(term: string): void {
    console.log('Do search by capital')
    console.log(term)
  }

}
