import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { List } from '../listing.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  listing: Subscription;
  res: List[];
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listing = this.service.getData().subscribe(resData => {
      this.res = resData;
    });
  }
  onClick() {
    this.router.navigate(['/maps']);
  }
  onListingView(i: number) {
    this.router.navigate([i], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    this.listing.unsubscribe();
  }
}