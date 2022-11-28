import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/header/auth.service';
import { ServiceService } from 'src/app/service.service';
import { Watchlist } from 'src/app/watsh-list/watchlist.module';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  userSub: Subscription;
  zoom: 12;
  markerOptions: google.maps.MarkerOptions = { draggable: false }
  listView: Subscription;
  watchLists: Watchlist[];
  watchlist: Subscription;
  res: Object;
  id: number;
  appId: number;

  constructor(
    private service: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.listView = this.service.getSingleData(this.id).subscribe(resData => {
          this.res = resData;
          console.log(resData);  
        });
      }
    );
  }

  onSave() {
    this.service.createWachlistData(this.id);

    this.router.navigate(['/watch-list']);
  }

  ngOnDestroy(): void {
    // this.watchlist.unsubscribe();
    this.listView.unsubscribe();
    this.userSub.unsubscribe();
  }
}
