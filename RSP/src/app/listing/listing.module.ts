export class List {
    name: string;
    date: Date;
    price: number;
    rate: number;
    image: string;
    coordinates: Coordinates;
    images: string[];
    guests: number;
    bedrooms: number;
    beds: number;
    bath: number;


    constructor(name: string,
        date: Date,
        price: number,
        rate: number,
        image: string,
        coordinates: Coordinates,
        images: string[],
        guests: number,
        bedrooms: number,
        beds: number,
        bath: number,

    ) {
        this.name = name;
        this.date = date;
        this.price = price;
        this.rate = rate;
        this.image = image;
        this.coordinates = coordinates;
        this.images = images;
        this.guests = guests;
        this.bedrooms = bedrooms;
        this.beds = beds;
        this.bath = bath;
    }
}

class Coordinates {
    lat!: number;
    lng!: number;
}