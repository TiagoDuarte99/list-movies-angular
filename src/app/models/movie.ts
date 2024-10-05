import { Genre } from './genre';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
  runtime: number;
  overview: string;
  tagline: string;
}
