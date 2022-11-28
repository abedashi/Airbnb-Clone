export class Watchlist {
    id?: number;
    appartment_id: number;
    userId: number;
    appName: string;
    images: string[];
    created_at: Date;
    price: number;

  constructor(
    id: number,
    appartment_id: number,
    userId: number,
    appName: string,
    images: string[],
    price: number
  ) {
    this.id = id;
    this.appartment_id = appartment_id;
    this.userId = userId;
    this.appName = appName;
    this.images = images;
    this.price = price;
  }
}
