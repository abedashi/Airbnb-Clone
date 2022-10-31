import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {
  @Input() images!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
