import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListingViewComponent } from "./listing/listing-view/listing-view.component";
import { ListingComponent } from "./listing/listing.component";



const appRoutes: Routes = [
    {path: '', redirectTo: 'listing', pathMatch: 'full'},
    {path: 'listing', component: ListingComponent, children: [
        {path: ':id', component: ListingViewComponent }
    ]},

]


@NgModule( {
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}  