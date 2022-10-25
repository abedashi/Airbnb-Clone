export class List {
    name!: string;
    distance!: string;
    date!: Date;
    price!: number;
    rate!: number;
    image: string[];

    constructor(name: string, dis: string, date: Date, price: number, rate: number, image: string[]) {
        this.name = name;
        this.distance = dis;
        this.date = date;
        this.price= price;
        this.rate = rate;
        this.image = image;
    }
}