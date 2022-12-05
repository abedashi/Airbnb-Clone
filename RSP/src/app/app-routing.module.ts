import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddListComponent } from "./add-list/add-list.component";
import { ListingViewComponent } from "./listing/listing-view/listing-view.component";
import { ListingComponent } from "./listing/listing.component";
import { MapsComponent } from "./maps/maps.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ListComponent } from "./listing/list/list.component"; 
import { ProfileComponent } from "./profile/profile.component";
import { WatshListComponent } from "./watsh-list/watsh-list.component";
import { AuthGuard } from "./header/auth.guard";
import { MessagesComponent } from "./messages/messages.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'listing', pathMatch: 'full' },
    { path: 'listing', component: ListingComponent, children: [
        { path: '', component: ListComponent },
        { path: ':id', component: ListingViewComponent }
    ]},
    { path: 'messages', component: MessagesComponent},
    { path: 'add-list', component: AddListComponent, canActivate: [AuthGuard] },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'maps', component: MapsComponent },
    { path: 'watch-list', component: WatshListComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule( {
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}  