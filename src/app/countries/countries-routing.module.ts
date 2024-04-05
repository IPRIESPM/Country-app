import { NgModule } from '@angular/core'
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component'
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component'
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  }, {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'by/:id',
    component: ByCountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'by-country'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }