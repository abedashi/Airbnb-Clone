import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthToken {
  id: string;
  username: string;
  token: string;
  exp: Date;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(username: string, password: string) {
    return this.http
      .post<AuthToken>('http://localhost:80/Airbnb-Clone-API/api/users/login.php',
        {
          username: username,
          password: password
        }).pipe(
          // catchError(this.handleError),
          tap(resData => {
            this.handleAuthentication(resData.id, resData.username, resData.token, +resData.exp);
          })
        );
  };

  signup(username: string, password: string, passwordConfirm: string) {
    return this.http
      .post<AuthToken>('http://localhost:80/Airbnb-Clone-API/api/users/register.php',
        {
          username: username,
          password: password,
          passwordConfirm: passwordConfirm
        }
      ).pipe(
        // catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.id, resData.username, resData.token, +resData.exp);
        })
      );
  }

  autoLogin() {
    const userData: {
      id: string;
      username: string;
      _token: string;
      _exp: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData){
      return;
    }
    const loadedUser = new User(userData.id, userData.username, userData._token, new Date(userData._exp));

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._exp).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(exp: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, exp);
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem("userData");
    this.router.navigate(['/listing']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  private handleAuthentication(id: string, username: string, token: string, exp: number) {
    const expirationDate = new Date(new Date().getTime() + exp * 1000)
    const user = new User(
      id,
      username,
      token,
      expirationDate
    );
    this.user.next(user);
    this.autoLogout(exp * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unkown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email not found';
        break;
    }
    return throwError(errorMessage);
  }
}
