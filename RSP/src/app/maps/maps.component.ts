import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { List } from '../listing/listing.module';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, OnDestroy{
  center: google.maps.LatLngLiteral = {lat: 33.8938, lng: 35.5018};
  zoom = 14;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: List[] = [];
  sub: Subscription;

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.service.getData()
      .subscribe((resData: List[]) => {
        this.markerPositions = resData;
    });
  }

  goTo(index: number) {
    this.router.navigate(['/listing/', index]);
  }

  onClick() {
    this.router.navigate(['/listing']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
