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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
