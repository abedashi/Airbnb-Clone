import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  @Input() inputs!: boolean;
  @ViewChild('AppName') appName!: ElementRef;
  @ViewChild('price') price!: ElementRef;
  @ViewChild('guest') guest!: ElementRef;
  @ViewChild('bedroom') bedroom!: ElementRef;
  @ViewChild('bed') bed!: ElementRef;
  @ViewChild('bath') bath!: ElementRef;
  @ViewChild('address') address!: ElementRef;

  // out = {
  //   appName: this.appName.nativeElement.value,
  //   price: this.price.nativeElement.value,
  //   guest: this.guest.nativeElement.value,
  //   bedroom: this.bedroom.nativeElement.value,
  //   bed: this.bed.nativeElement.value,
  //   bath: this.bath.nativeElement.value,
  //   address: this.address.nativeElement.value
  // }

  // @Output() outt = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
}
