import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostProfileService } from '../profile/post-profile.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  error: string = null;
  res: {};
  userSub: Subscription;
  sub: Subscription
  constructor(
    private authService: AuthService,
    private profileService: PostProfileService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    this.sub = this.profileService.getProfileData()
      .subscribe(resData => {
        this.res = resData;
        console.log(this.res);
    });
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
      });
    form.reset();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
