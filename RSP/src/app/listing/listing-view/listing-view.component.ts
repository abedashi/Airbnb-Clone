import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit, OnDestroy {
  // coordinates: google.maps.LatLngLiteral;
  zoom: 12;
  markerOptions: google.maps.MarkerOptions = { draggable: false }
  listView: Subscription;
  res: Object;
  id!: number;

  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
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

  onclick(i: number) {
    this.service.addToWatchListId(i);
    this.router.navigate(['/watch-list']);
  }

  ngOnDestroy(): void {
    this.listView.unsubscribe();
  }
}
