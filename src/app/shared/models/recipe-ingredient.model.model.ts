import { IngredientModel } from "./ingredient.model.model";

export interface RecipeIngredientModel {
    id: number;
    ingredient: string;
    amount: number;
    unit: string
}
