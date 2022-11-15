import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddListComponent } from "./add-list/add-list.component";
import { ListingViewComponent } from "./listing/listing-view/listing-view.component";
import { ListingComponent } from "./listing/listing.component";
import { MapsComponent } from "./maps/maps.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ListComponent } from "./listing/list/list.component"; 
import { ProfileComponent } from "./profile/profile.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component";
import { EditProfileFormComponent } from "./profile/edit-profile-form/edit-profile-form.component";
import { WatshListComponent } from "./watsh-list/watsh-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'listing', pathMatch: 'full' },
    { path: 'listing', component: ListingComponent, children: [
        { path: '', component: ListComponent },
        { path: ':id', component: ListingViewComponent }
    ]},
    { path: 'add-list', component: AddListComponent },
    { path: 'profile', component: ProfileComponent , children: [
        // { path: '', redirectTo: 'profile', pathMatch: 'full' },
        { path: ':id', component: EditProfileComponent },
        { path: ':id/edit', component: EditProfileFormComponent }
    ]},
    { path: 'maps', component: MapsComponent },
    { path: 'watch-list', component: WatshListComponent},
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule( {
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}  