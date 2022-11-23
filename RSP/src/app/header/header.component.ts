import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  error: string = null;
  constructor(
    private authService: AuthService,
    private router: Router  
  ) { }

  ngOnInit(): void {
  }

  onSubmitF1(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const usernameLogIn = form.value.usernameLogIn;
    const passwordLogin = form.value.passLogIn;
    
    this.authService.login(usernameLogIn, passwordLogin)
      .subscribe(resData => {
        console.log(resData);
        // this.router.navigate(['/listing']);
      });
    form.reset();
  }

  onSubmitF2(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const usernameSignUp = form.value.usernameSignUp;
    const passwordSignUp = form.value.passSignUp;
    const passwordConfirm = form.value.passConfrim;

    this.authService.signup(usernameSignUp, passwordSignUp, passwordConfirm)
      .subscribe(resData => {
        console.log(resData);
        // this.router.navigate(['/listing']);
      });
      // , errorMessage => {
      //   console.log(errorMessage);
      //   this.error = errorMessage;
      //   this.isLoading = false;
      // });
    form.reset();
  }
}
