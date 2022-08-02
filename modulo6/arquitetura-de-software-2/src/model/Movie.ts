export class Movie {
    constructor(
    private id:string,
    private title:string,
    private description:string,
    private duration_in_minutes:number,
    private year_of_release:number 
    ){}
    getId() {
        return this.id;
      }
    getTitle() {
        return this.title;
      }
    getDescription(){
        return this.description;
    }  
    getDurationInMinutes(){
      return this.duration_in_minutes 
    }
    getYearOfRelease(){
        return this.year_of_release
    }
}