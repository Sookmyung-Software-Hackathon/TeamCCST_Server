import { EntityRepository, Repository } from 'typeorm';
import { Recipe } from '../entity/Recipe';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {}
