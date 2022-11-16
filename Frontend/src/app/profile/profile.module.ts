export class Profile {
    about: string;
    location: string;
    languages: string;
    work: string;

    constructor(about:string, location: string, languages: string, work: string){
        this.about = about;
        this.location = location;
        this.languages = languages;
        this.work = work;
    }
}