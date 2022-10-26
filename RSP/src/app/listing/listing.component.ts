import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from './listing.module';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listing: List[] = [
    new List('Qatar', '195 Kilometers away', new Date(), 170, 4.1,
      'https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'),
    new List('Cyprus', '185 Kilometers away', new Date(), 180, 3.9,
      'https://images.pexels.com/photos/6091193/pexels-photo-6091193.jpeg?auto=compress&cs=tinysrgb&w=800'),
    new List('Lebanon', '185 Kilometers away', new Date(), 180, 5.0,
      'https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=800'),
    new List('Italy', '185 Kilometers away', new Date(), 180, 4.5,
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800'),
    new List('Spain', '185 Kilometers away', new Date(), 180, 4.2,
      'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=800'),
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onListingView() {
    this.router.navigate(['/id'])
  }

}
