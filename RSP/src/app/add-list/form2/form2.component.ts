import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
 @Input() offers!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
