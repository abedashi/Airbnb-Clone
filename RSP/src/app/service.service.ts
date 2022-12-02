import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from './listing/listing.module';
import { Watchlist } from './watsh-list/watchlist.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(
    private http: HttpClient
  ) { }

  createContact(index: number) {
    this.http.get('http://localhost:80/Airbnb-Clone-API/api/contact/create.php', {
      params: new HttpParams().set('hostId', index)
    }).subscribe(resData => {
      console.log(resData)
    });
  }

  // getSingeleContact(index: number) {
  //   this.http.get('http://localhost:80/Airbnb-Clone-API/api/contact/get_single.php', {
  //     params: new HttpParams().set('hostId', index)
  //   });
  // }

  // createChat(message: string, index: number) {
  //   const postData = {message: message}
  //   this.http.post('http://localhost:80/Airbnb-Clone-API/api/contact/create.php', postData, {
  //     params: new HttpParams().set('hostId', index)
  //   });
  // }

  // getChat(index: number) {
  //   this.http.get('http://localhost:80/Airbnb-Clone-API/api/contact/getChat.php', {
  //     params: new HttpParams().set('contactId', index)
  //   });
  // }
  
  createWatchlistData(index: number) {
    this.http
      .get('http://localhost:80/Airbnb-Clone-API/api/watchlist/create.php', {
        params: new HttpParams().set('appartment_id', index)
      })
      .subscribe(resData => {
        console.log(resData);
      });
  }

  getWatchlistData() {
    return this.http
      .get<Watchlist[]>('http://localhost/Airbnb-Clone-API/api/watchlist/get.php')
  }

  deleteFromWatchist(index: number) {
    this.http
      .delete('http://localhost/Airbnb-Clone-API/api/watchlist/delete.php', {
        params: new HttpParams().set('appartmentId', index)
      })
      .subscribe(resData => {
        console.log(resData);
      });
  }

  getData() {
    return this.http
      .get<List[]>('http://localhost/Airbnb-Clone-API/api/appartments-list/get.php')
  }

  getSingleData(index: number){
    return this.http
      .get<List>('http://localhost/Airbnb-Clone-API/api/appartments-list/get_single.php', {
        params: new HttpParams().set('id', index)
      });
  }
}

