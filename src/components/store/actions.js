import types from './types';
export const addProduct = (id, time, name, calories, proteins, fats, carbohydrates) => ({
	type: types.ADD_PRODUCT, id, time, name, calories, proteins, fats, carbohydrates
});