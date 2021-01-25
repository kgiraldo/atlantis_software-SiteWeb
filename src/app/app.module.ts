import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ProductCharacteristicComponent } from './product-characteristic/product-characteristic.component';
import { AtlantisBusinessComponent } from './atlantis-business/atlantis-business.component';
import { CommersialisationComponent } from './commersialisation/commersialisation.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { ContactComponent } from './contact/contact.component';
import { PackagesComponent } from './packages/packages.component';
import { ModulesComponent } from './modules/modules.component';
import { ExtensionsComponent } from './extensions/extensions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragScrollModule } from 'ngx-drag-scroll';
import { JobOffertComponent } from './job-offert/job-offert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CharacteristicsComponent,
    ProductCharacteristicComponent,
    AtlantisBusinessComponent,
    CommersialisationComponent,
    RecrutementComponent,
    ContactComponent,
    PackagesComponent,
    ModulesComponent,
    ExtensionsComponent,
    JobOffertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    NgxPaginationModule,
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}