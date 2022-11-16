import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { List } from '../listing/listing.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  addList: FormGroup;
  name; price; bedroom; bed; bath; guest; address;
  image1; image2; image3; image4; image5;
  lat; lng;

  newlist: List;


  center: google.maps.LatLngLiteral = { lat: 33.8938, lng: 35.5018 };
  zoom = 14;
  markerOpitions: google.maps.MarkerOptions = { draggable: false }
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addList = new FormGroup({
      'name': new FormControl('', Validators.required),
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
      'section': new FormGroup({
        'wifi': new FormControl(false),
        'park': new FormControl(false),
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
    this.address = this.addList.get('address').value;
    this.bath = this.addList.get('bath').value;
    this.name = this.addList.get('name').value;
    this.price = this.addList.get('price').value;
    this.bedroom = this.addList.get('bedroom').value;
    this.guest = this.addList.get('guest').value;
    this.bed = this.addList.get('bed').value;
    this.lat = this.addList.get('map.lat').value;
    this.lng = this.addList.get('map.lng').value;
    this.image1 = this.addList.get('image1').value;
    this.image2 = this.addList.get('image2').value;
    this.image3 = this.addList.get('image3').value;
    this.image4 = this.addList.get('image4').value;
    this.image5 = this.addList.get('image5').value;

    this.newlist = new List(
      this.name, 
      new Date(),
      this.price,
      4.9,
      { lat: this.lat, lng: this.lng},
      [
        this.image1,
        this.image2,
        this.image3,
        this.image4,
        this.image5,
      ],
      this.guest,
      this.bedroom,
      this.bed,
      this.bath,
      this.address,
      )
      this.service.addList(this.newlist);
    // console.log(this.newlist);
    this.router.navigate(['/listing']);
    this.addList.reset();
  }
}