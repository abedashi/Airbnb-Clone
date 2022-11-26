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
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2Njk0OTQ3OTQsIm5iZiI6MTY2OTQ5NDc5NCwiZXhwIjoxOTI4Njk0Nzk0LCJkYXRhIjp7ImlkIjoxMX19.Mp5EqyAosnvvOyLkdgZ7aOl3PohOWCD7hqiG2s0vngU'
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
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2Njk0OTQ3OTQsIm5iZiI6MTY2OTQ5NDc5NCwiZXhwIjoxOTI4Njk0Nzk0LCJkYXRhIjp7ImlkIjoxMX19.Mp5EqyAosnvvOyLkdgZ7aOl3PohOWCD7hqiG2s0vngU'
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
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2Njk0OTQ3OTQsIm5iZiI6MTY2OTQ5NDc5NCwiZXhwIjoxOTI4Njk0Nzk0LCJkYXRhIjp7ImlkIjoxMX19.Mp5EqyAosnvvOyLkdgZ7aOl3PohOWCD7hqiG2s0vngU'
        ),
      }
    );
  }
}
