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
import { Form1Component } from './add-list/form1/form1.component';
import { Form2Component } from './add-list/form2/form2.component';
import { Form3Component } from './add-list/form3/form3.component';
import { Form4Component } from './add-list/form4/form4.component';
import { ListComponent } from './listing/list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { EditProfileFormComponent } from './profile/edit-profile-form/edit-profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingComponent,
    MapsComponent,
    ListingViewComponent,
    PageNotFoundComponent,
    AddListComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    ListComponent,
    ProfileComponent,
    EditProfileComponent,
    EditProfileFormComponent
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
