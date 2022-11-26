export class List {
    appName: string;
    price: number;
    coordinates: Coordinates;
    images: string[];
    guests: number;
    bedrooms: number;
    beds: number;
    bath: number;
    address: string;
    offers: Offers;
    id?: number;
    created_at: Date;

    constructor(
        appName: string,
        price: number,
        coordinates: Coordinates,
        images: string[],
        guests: number,
        bedrooms: number,
        beds: number,
        bath: number,
        address: string,
        offers: Offers
    ) {
        this.appName = appName;
        this.price = price;
        this.coordinates = coordinates;
        this.images = images;
        this.guests = guests;
        this.bedrooms = bedrooms;
        this.beds = beds;
        this.bath = bath;
        this.address = address;
        this.offers = offers
    }
}
class Coordinates {
    lat: number;
    lng: number;
}
class Offers{
    wifi: boolean;
    parking: boolean;
    tv: boolean;
    ac: boolean;
    smoke: boolean;
    electricity: boolean;
}