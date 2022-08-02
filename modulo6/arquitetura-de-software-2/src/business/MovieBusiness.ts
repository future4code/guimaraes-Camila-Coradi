import { MovieDatabase } from "../data/MovieDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class MovieBusiness {
  async create({
    title,
    description,
    duration_in_minutes,
    year_of_release,
  }: any): Promise<void> {
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error(
        "Dados inválidos (title, description, duration_in_minutes, year_of_release)"
      );
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
  }
  getAllMovie = async (): Promise<void> => {
    return await new MovieDatabase().getMovies();
  };
}
