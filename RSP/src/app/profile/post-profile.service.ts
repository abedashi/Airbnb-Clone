import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostProfileService {
  constructor(private http: HttpClient) {}

  updateProfile(
    about: string,
    language: string,
    location: string,
    job: string
  ) {
    const postData = {
      about: about,
      language: language,
      location: location,
      job: job,
    };
    return this.http.put(
      'http://localhost:80/Airbnb-Clone-API/api/users/update_profile.php',
      postData,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NjkyMDU5MTMsIm5iZiI6MTY2OTIwNTkxMywiZXhwIjoxOTI4NDA1OTEzLCJkYXRhIjp7ImlkIjo1fX0.cDiX9P1GeOu46WcNR4irRLpb8bMfSTtDZJ4xvwN0VJc'

        ),
      }
    );
  }

  updateImage(image: string) {
    const upImage = { image: image };
    return this.http.put(
      'http://localhost:80/Airbnb-Clone-API/api/users/update_image.php',
      upImage,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NjkyMDU5MTMsIm5iZiI6MTY2OTIwNTkxMywiZXhwIjoxOTI4NDA1OTEzLCJkYXRhIjp7ImlkIjo1fX0.cDiX9P1GeOu46WcNR4irRLpb8bMfSTtDZJ4xvwN0VJc'

        ),
      }
    );
  }

  getProfileData() {
    return this.http.get(
      'http://localhost/Airbnb-Clone-API/api/users/get_profile.php',
      {
        headers: new HttpHeaders().set(
          'Authorization',
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NjkyMDU5MTMsIm5iZiI6MTY2OTIwNTkxMywiZXhwIjoxOTI4NDA1OTEzLCJkYXRhIjp7ImlkIjo1fX0.cDiX9P1GeOu46WcNR4irRLpb8bMfSTtDZJ4xvwN0VJc'

        ),
      }
    );
  }
}
