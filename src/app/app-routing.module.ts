import { CountriesModule } from './countries/countries.module';
import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact-page/contact.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'countries'
  }, {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'countries',
    loadChildren: () => import("./countries/countries.module").then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'countries'
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
