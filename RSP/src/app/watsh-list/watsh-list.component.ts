import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service.service';
import { Watchlist } from './watchlist.module';

@Component({
  selector: 'app-watsh-list',
  templateUrl: './watsh-list.component.html',
  styleUrls: ['./watsh-list.component.css'],
})
export class WatshListComponent implements OnInit, OnDestroy {
  watchlist: Subscription;
  watchLists: Watchlist[];

  constructor(
    private service: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.watchlist = this.service.getWatchlistData().subscribe((resData) => {
      this.watchLists = resData;
      console.log(resData);
    });
  }
  onListingView(index: number) {
    this.router.navigate(['/listing/', index]);
  }
  ngOnDestroy(): void {
    this.watchlist.unsubscribe();
  }
}
