import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListingViewComponent } from './listing/listing-view/listing-view.component';
import { ListingComponent } from './listing/listing.component';
import { MapsComponent } from './maps/maps.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddListComponent } from './add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingComponent,
    MapsComponent,
    ListingViewComponent,
    PageNotFoundComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleMapsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
