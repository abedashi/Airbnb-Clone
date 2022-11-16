import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ListComponent } from './listing/list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { EditProfileFormComponent } from './profile/edit-profile-form/edit-profile-form.component';
import { WatshListComponent } from './watsh-list/watsh-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingComponent,
    MapsComponent,
    ListingViewComponent,
    PageNotFoundComponent,
    AddListComponent,
    ListComponent,
    ProfileComponent,
    EditProfileComponent,
    EditProfileFormComponent,
    WatshListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
