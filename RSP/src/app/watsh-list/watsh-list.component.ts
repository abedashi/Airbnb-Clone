import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../listing/listing.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-watsh-list',
  templateUrl: './watsh-list.component.html',
  styleUrls: ['./watsh-list.component.css']
})
export class WatshListComponent implements OnInit {
  watchLists!: List[];
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.watchLists = this.service.getWatchlist();
  }
  onListingView(i: number) {
    this.router.navigate(['/listing/', i]);
  }
}
