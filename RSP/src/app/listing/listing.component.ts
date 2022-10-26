import { Component, OnInit } from '@angular/core';
import { List } from './listing.module';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listing: List[] = [
    new List('Qatar', '185 Kilometers away', new Date(), 180, 4.1, 
      'https://a0.muscache.com/im/pictures/63befe3b-264a-4082-ab8d-7b0681b91955.jpg?im_w=320'),
    new List('Cyprus', '285 Kilometers away', new Date(), 100, 4.4,
      'https://a0.muscache.com/im/pictures/63befe3b-264a-4082-ab8d-7b0681b91955.jpg?im_w=320'
    ),
    new List('Cyprus', '285 Kilometers away', new Date(), 100, 4.4,
      'https://a0.muscache.com/im/pictures/63befe3b-264a-4082-ab8d-7b0681b91955.jpg?im_w=320'),
    new List('Cyprus', '285 Kilometers away', new Date(), 100, 4.4, 
      'https://a0.muscache.com/im/pictures/63befe3b-264a-4082-ab8d-7b0681b91955.jpg?im_w=320'),
    new List('Cyprus', '285 Kilometers away', new Date(), 100, 4.4,
      'https://a0.muscache.com/im/pictures/63befe3b-264a-4082-ab8d-7b0681b91955.jpg?im_w=320')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
