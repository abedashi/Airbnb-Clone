import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  center: google.maps.LatLngLiteral = {lat: 33.8938, lng: 35.5018};
  zoom = 14;
  location!: google.maps.LatLngLiteral;
  markerOpitions: google.maps.MarkerOptions = { draggable: false }
  markerPositions: google.maps.LatLngLiteral[] = [];

  question: string = 'Inputs?';
  inputs: boolean = false;
  offers: boolean = true;
  maps: boolean = true;
  images: boolean = true;
  slide: number = 0;

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

  onBack() {
    if (this.slide === 1) {
      this.slide--;
      this.inputs = !this.inputs;
      this.offers = !this.offers;
      this.question = 'Inputs?'
    } else if (this.slide === 2) {
      this.slide--;
      this.offers = !this.offers;
      this.maps = !this.maps;
      this.question = 'offers?'
    } else if (this.slide === 3) {
      this.slide--;
      this.maps = !this.maps;
      this.images = !this.images;
      this.question = 'maps?'
    }
  }

  onNext() {
    this.slide++;
    if (this.slide === 1) {
      this.inputs = !this.inputs;
      this.offers = !this.offers;
      this.question = 'offers?'
    } else if (this.slide === 2) {
      this.offers = !this.offers;
      this.maps = !this.maps;
      this.question = 'maps?'
    } else if (this.slide === 3) {
      this.maps = !this.maps;
      this.images = !this.images;
      this.question = 'images?'
    }
  }
}
