import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('f1') logInForm!: NgForm;
  @ViewChild('f2') signUpForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitF1(form: NgForm) {
    console.log(form);
    // console.log(this.logInForm.value.usernameLogIn);
    this.logInForm.reset();
  }
  onSubmitF2(form: NgForm) {
    console.log(form);
    this.signUpForm.reset();
  }
}
