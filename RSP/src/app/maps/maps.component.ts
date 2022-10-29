import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { List } from '../listing/listing.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center: google.maps.LatLngLiteral = {lat: 33.8938, lng: 35.5018};
  zoom = 14;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: List[] = [];

  lists!: List[];
  label!: string;

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lists = this.service.getList();
    this.lists.forEach(list => {
      return this.markerPositions.push(list);
    });
  }

  goTo(index: number) {

  }

  onClick() {
    this.router.navigate(['/listing']);
  }
}
