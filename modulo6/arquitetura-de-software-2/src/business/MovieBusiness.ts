import { MovieDatabase } from "../data/MovieDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { MovieDTO } from "../model/movieDTO";
import { IdGenerator } from "../services/IdGenerator";

export class MovieBusiness {
  async create(input:MovieDTO): Promise<void> {
    try{
      const {title, description, duration_in_minutes, year_of_release} = input;
      if (!title || !description || !duration_in_minutes || !year_of_release) {
        throw new InvalidRequest()
      }
      const id:string = IdGenerator()
  
      const movieDatabase = new MovieDatabase();
      await movieDatabase.create({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release,
      });
    }catch(error:any){
      throw new CustomError(error.message || error.sqlMessage, error.statusCode);

    }
    
  }
  getAllMovie = async (): Promise<void> => {
    return await new MovieDatabase().getMovies();
  };
}
