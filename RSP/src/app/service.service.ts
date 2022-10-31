import { Injectable } from '@angular/core';
import { List } from './listing/listing.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  listing: List[] = [
    new List(
      'Mar Mikhael', new Date(), 171, 4.1, 
      'https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      { lat: 33.9015, lng: 35.5237 },
      ['https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'
      ], 2, 3, 1, 2
    ),
    new List(
      'Central Military Club', new Date(), 250, 3.9,
      'https://images.pexels.com/photos/6091193/pexels-photo-6091193.jpeg?auto=compress&cs=tinysrgb&w=800',
      { lat: 33.897349558489125, lng: 35.47030448913574 },
      ['https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'
      ], 2, 3, 1, 2
    ),
    new List(
      'Lebanon', new Date(), 100, 5.0,
      'https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=800',
      { lat: 33.8966, lng: 35.4823 },
      ['https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'
      ], 5, 3, 1, 2
    ),
    new List(
      'Beirut Central District', new Date(), 230, 4.5,
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      { lat: 33.9055, lng: 35.5069 },
      ['https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'
      ], 1, 3, 1, 2
    )
  ]

  getList() {
    return this.listing;
  }

  getListId(index: number) {
    return this.listing[index];
  }
}
