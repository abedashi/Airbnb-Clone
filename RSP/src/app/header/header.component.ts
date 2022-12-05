import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostProfileService } from '../profile/post-profile.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('closeBtnLogin') closeBtnLogin: ElementRef;
  @ViewChild('closeBtnSignUp') closeBtnSignUp: ElementRef;

  isAuthenticated: boolean = false;
  errorLogin: string = null;
  errorSignUp: string = null;
  res: {};
  userSub: Subscription;
  sub: Subscription;

  constructor(
    private authService: AuthService,
    private profileService: PostProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onSubmitF1(form: NgForm) {
    const usernameLogIn = form.value.usernameLogIn;
    const passwordLogin = form.value.passLogIn;

    this.authService.login(usernameLogIn, passwordLogin)
      .subscribe(() => {

      }, errorMessage => {
        this.errorLogin = errorMessage;
      });
    form.reset();
    setTimeout(() => {
      if (this.isAuthenticated) {
        this.closeBtnLogin.nativeElement.click();
      }
    }, 500);
  }

  onSubmitF2(form: NgForm) {
    const usernameSignUp = form.value.usernameSignUp;
    const passwordSignUp = form.value.passSignUp;
    const passwordConfirm = form.value.passConfrim;

    this.authService.signup(usernameSignUp, passwordSignUp, passwordConfirm)
      .subscribe(() => {
        
      }, errorMessage => {
        this.errorSignUp = errorMessage;
      });
    form.reset();
    setTimeout(() => {
      if (this.isAuthenticated) {
        this.closeBtnSignUp.nativeElement.click();
      }
    }, 500);
  }

  onLogout() {
    this.authService.logout();
    this.errorLogin = null;
    this.errorSignUp = null;
  }

  onP() {
    this.sub = this.profileService.getProfile().subscribe(resData => {
      this.router.navigate(['/profile/', resData['id']]);
    });
  }

  list() {
    this.router.navigate(['/listing']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
