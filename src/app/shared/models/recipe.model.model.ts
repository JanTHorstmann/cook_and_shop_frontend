import { RecipeIngredientModel } from "./recipe-ingredient.model.model";

export interface RecipeModel {
    id: number;
    name: string;
    instructions: string;
    preparation_time: number;
    difficulty: string;
    category: string;
    author: string;
    ingredients: RecipeIngredientModel[];
    recipe_img: string | null;
}

