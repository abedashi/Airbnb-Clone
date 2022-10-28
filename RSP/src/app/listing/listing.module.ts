export class List {
    name: string;
    distance: string;
    date: Date;
    price: number;
    rate: number;
    image: string;
    coordinates: Coordinates;

    constructor(name: string, dis: string, date: Date, price: number, rate: number, image: string, coordinates: Coordinates) {
        this.name = name;
        this.distance = dis;
        this.date = date;
        this.price= price;
        this.rate = rate;
        this.image = image;
        this.coordinates = coordinates;
    }
}

class Coordinates {
    lat!: number;
    lng!: number;
}