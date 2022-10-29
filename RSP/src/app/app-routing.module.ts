import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddListComponent } from "./add-list/add-list.component";
import { ListingViewComponent } from "./listing/listing-view/listing-view.component";
import { ListingComponent } from "./listing/listing.component";
import { MapsComponent } from "./maps/maps.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'listing', pathMatch: 'full' },
    { path: 'listing', component: ListingComponent, children: [
        // { path: ':id', component: ListingViewComponent }
    ]},
    { path: 'add-list', component: AddListComponent },
    { path: 'maps', component: MapsComponent },
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