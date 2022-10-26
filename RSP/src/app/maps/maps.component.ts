import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

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
  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: 33.8955282474581, lng: 35.49712222747803},
    {lat: 33.897349558489125, lng: 35.47030448913574},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.markerPositions.push(event.latLng.toJSON());
      console.log(event.latLng?.toJSON());
  }
  deleteMarker(index: number) {
    this.markerPositions.splice(index, 1);
  }
  goTo(index: number) {

  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined)
      this.infoWindow.open(marker);
      console.log(marker);
  }
}
