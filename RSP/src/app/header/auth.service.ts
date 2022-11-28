import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
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

  logout() {
    this.user.next(null);
    this.router.navigate(['/listing']);
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
