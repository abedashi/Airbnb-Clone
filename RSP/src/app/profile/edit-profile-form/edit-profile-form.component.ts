import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {
  @ViewChild('profile') profile!: NgForm;
  @Input() bool!: boolean;
  @Output() out = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
    console.log(form);
  }
  onBack() {
    this.bool = true;
    console.log(this.bool);
    this.out.emit(this.bool);
  }

}
