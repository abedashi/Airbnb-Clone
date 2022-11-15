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
      { lat: 33.9015, lng: 35.5237 },
      ['https://a0.muscache.com/im/pictures/miso/Hosting-45870138/original/ad367e9c-7a2d-43bf-9fed-80650ef27760.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/bbe1001f-df9a-42ae-b018-76aa1a164ed4.jpg?im_w=480',
      'https://a0.muscache.com/im/pictures/miso/Hosting-45870138/original/2e2bf69a-0fd8-4737-86b8-9d731b0ac441.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/miso/Hosting-45870138/original/f7ff8008-af1c-4aac-9dc6-2ddad691b635.jpeg?im_w=480',
      'https://a0.muscache.com/im/pictures/miso/Hosting-45870138/original/a300a1b9-61ca-40a5-9a5d-67ab1e64bb39.jpeg?im_w=480'
      ], 2, 3, 1, 2, 'Urban Blues Refined Apartment in Central Beirut', 'Beirut, Mount Lebanon Governorate, Lebanon'
    ),
    new List(
      'Central Military Club', new Date(), 250, 3.9,
      { lat: 33.897349558489125, lng: 35.47030448913574 },
      ['https://a0.muscache.com/im/pictures/14335b3e-f6f8-4a40-b5fc-1607f315c292.jpg?im_w=960',
      'https://a0.muscache.com/im/pictures/2c3ffc79-dca9-4dec-8c00-b1f7d1732ce2.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/9b649be9-e0b6-483d-84fd-376656308192.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/88c6e02c-97c3-4ac1-8971-ab784225dba6.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/256efd84-c134-49cc-b2c3-54c72022c027.jpg?im_w=720'
      ], 2, 3, 1, 2, 'lovely loft in Ashrafieh', 'Beirut, Beirut Governorate, Lebanon'
    ),
    new List(
      'Lebanon', new Date(), 100, 5.0,
      { lat: 33.8966, lng: 35.4823 },
      ['https://a0.muscache.com/im/pictures/miso/Hosting-626570829478211947/original/ee8f1959-fed9-4eef-857e-2cba5f6353d4.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/miso/Hosting-626570829478211947/original/3ba56af3-09ca-4ef4-b01e-6a9a1e6fb46f.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-626570829478211947/original/be55b4b1-6ef7-4dbc-a564-8069fa1a11a4.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-626570829478211947/original/51b023c9-1160-4792-b4a1-5a4b84533c58.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-626570829478211947/original/bfcc7114-68a4-473e-b633-836175633714.jpeg?im_w=720'
      ], 4, 4, 3, 1, 'Modern Listing in the heart of Mar Mikhael (303)', 'Beirut, Mount Lebanon Governorate, Lebanon'
    ),
    new List(
      'Beirut Central District', new Date(), 230, 4.5,
      { lat: 33.9055, lng: 35.5069 },
      ['https://a0.muscache.com/im/pictures/miso/Hosting-44310763/original/4abb4247-fe68-419d-adcd-2f68e8fcf02f.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/miso/Hosting-44310763/original/1a9e1d5e-d613-425d-b543-21b1d1d19cd5.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-44310763/original/f1458ebc-d544-4249-a4a8-c01532be8d81.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-44310763/original/e53b56ea-f277-46b0-a120-d3c1bd6a5b25.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-44310763/original/f8fe1c6f-92bb-4bb1-a4e7-e3941837b7aa.jpeg?im_w=720'
      ], 2, 2, 3, 1, 'LoveLy MasTer BedRoom', 'Bayrut, Beirut Governorate, Lebanon'
    )
  ]

  watchList: List[] = [];

  getWatchlist() {
    return this.watchList;
  }
  addToWatchListId(index: number) {
    this.watchList.push(this.listing[index]);
  }

  getList() {
    return this.listing;
  }

  getListId(index: number) {
    return this.listing[index];
  }
}
