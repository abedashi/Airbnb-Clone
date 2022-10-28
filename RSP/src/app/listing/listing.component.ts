import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { List } from './listing.module';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listing!: List[];

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listing = this.service.getList();
  }

  onListingView() {
    // this.router.navigate(['/id'])
  }

  onClick() {
    this.router.navigate(['/maps']);
  }
}
