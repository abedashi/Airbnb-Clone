import { Component, Input, OnInit } from '@angular/core';
import { List } from '../listing.module';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
