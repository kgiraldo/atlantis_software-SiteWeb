import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtlantisBusinessComponent } from './atlantis-business/atlantis-business.component';
import { CommersialisationComponent } from './commersialisation/commersialisation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RecrutementComponent } from './recrutement/recrutement.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"atlantis", component: AtlantisBusinessComponent},
  {path:"commersialisation", component: CommersialisationComponent},
  {path:"recrutement", component: RecrutementComponent},
  {path:"contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
