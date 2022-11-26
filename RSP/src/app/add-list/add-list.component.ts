import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthToken } from '../header/auth.service';
import { List } from '../listing/listing.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  addList: FormGroup;
  center: google.maps.LatLngLiteral = { lat: 33.8938, lng: 35.5018 };
  zoom = 14;
  markerOpitions: google.maps.MarkerOptions = { draggable: false }
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addList = new FormGroup({
      'appName': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'bedroom': new FormControl('', Validators.required),
      'bed': new FormControl('', Validators.required),
      'bath': new FormControl('', Validators.required),
      'guest': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'image1': new FormControl('', Validators.required),
      'image2': new FormControl('', Validators.required),
      'image3': new FormControl('', Validators.required),
      'image4': new FormControl('', Validators.required),
      'image5': new FormControl('', Validators.required),
      'map': new FormGroup({
        'lat': new FormControl('', Validators.required),
        'lng': new FormControl('', Validators.required),
      }),
      'offers': new FormGroup({
        'wifi': new FormControl(false),
        'parking': new FormControl(false),
        'tv': new FormControl(false),
        'ac': new FormControl(false),
        'smoke': new FormControl(false),
        'electricity': new FormControl(false),
      })
    })
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null && this.markerPositions.length < 1) {
      this.markerPositions.push(event.latLng.toJSON());
      this.addList.get('map.lat').setValue(event.latLng.lat());
      this.addList.get('map.lng').setValue(event.latLng.lng());
      this.addList.get('map.lat').disable();
      this.addList.get('map.lng').disable();
      console.log();
    }
  }

  deleteMarker() {
    this.markerPositions.pop();
  }
  onSubmit() {
    this.http
      .post('http://localhost:80/Airbnb-Clone-API/api/appartments-list/create.php', {
        appName: this.addList.get('appName').value,
        address: this.addList.get('address').value,
        price: this.addList.get('price').value,
        guests: this.addList.get('guest').value,
        bedroom: this.addList.get('bedroom').value,
        bed: this.addList.get('bed').value,
        bath: this.addList.get('bath').value,
        coordinates: {
          lat: this.addList.get('map.lat').value,
          lng: this.addList.get('map.lng').value
        },
        offers: {
          wifi: this.addList.get('offers.wifi').value,
          parking: this.addList.get('offers.parking').value,
          tv: this.addList.get('offers.tv').value,
          ac: this.addList.get('offers.ac').value,
          smoke: this.addList.get('offers.smoke').value,
          electricity: this.addList.get('offers.electricity').value
        },
        images: [
          this.addList.get('image1').value,
          this.addList.get('image2').value,
          this.addList.get('image3').value,
          this.addList.get('image4').value,
          this.addList.get('image5').value
        ]
      }, {
        headers: new HttpHeaders().set('Authorization',
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2Njk0OTQ3OTQsIm5iZiI6MTY2OTQ5NDc5NCwiZXhwIjoxOTI4Njk0Nzk0LCJkYXRhIjp7ImlkIjoxMX19.Mp5EqyAosnvvOyLkdgZ7aOl3PohOWCD7hqiG2s0vngU')
      }).subscribe();

    this.router.navigate(['/listing']);
    this.addList.reset();
  }
}