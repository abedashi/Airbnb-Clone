import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { List } from '../listing.module';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {
  coordinates!: google.maps.LatLngLiteral;
  zoom!: 12;
  markerOptions: google.maps.MarkerOptions = { draggable: false }
  listView!: List;
  id!: number;

  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.listView = this.service.getListId(this.id);
        this.coordinates = this.listView.coordinates;
      }
    );
  }

  onclick(i: number) {
    this.service.addToWatchListId(i);
    this.router.navigate(['/watch-list']);
  }
}
