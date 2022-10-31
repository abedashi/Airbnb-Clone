import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  @Input() maps!: boolean;
  center: google.maps.LatLngLiteral = {lat: 33.8938, lng: 35.5018};
  zoom = 14;
  location!: google.maps.LatLngLiteral;
  markerOpitions: google.maps.MarkerOptions = { draggable: false }
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null && this.markerPositions.length < 1) {
      this.markerPositions.push(event.latLng.toJSON());
    }
    this.location = this.markerPositions[0];
  }

  deleteMarker() {
    this.markerPositions.pop();
  }
}
