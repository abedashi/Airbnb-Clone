import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { List } from '../listing.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listing!: List[];
  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listing = this.service.getList();
    console.log(this.listing);
  }
  onClick() {
    this.router.navigate(['/maps']);
  }
  onListingView(i: number) {
    this.router.navigate([i], { relativeTo: this.route})
  }
}
