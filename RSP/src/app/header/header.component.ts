import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('switch') switch!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    console.log(this.switch.nativeElement.checked);
  }
}
