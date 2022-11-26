import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthToken {
  id: string;
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    return this.http
      .post<AuthToken>('http://localhost:80/Airbnb-Clone-API/api/users/login.php',
        {
          username: username,
          password: password
        }).pipe(
          catchError(this.handleError),
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
        catchError(this.handleError),
      );
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
