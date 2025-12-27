import { IngredientModel } from "./ingredient.model.model";

export interface RecipeIngredientModel {
    id: number;
    name: IngredientModel;
    amount: number;
    unit: string
}
