import types from './types';

const initialStates = {
	"id": "",
	"time": "",
	"name": "",
	"calories": "",
	"proteins": "",
	"fats": "",
	"carbohydrates": "",
};

export const productReducer = (state = [], action) => {
	switch (action.type) {
		case types.ADD_PRODUCT:
			const product = {
				id: action.id, 
				time: action.time,
				name: action.name,
				calories: action.calories,
				proteins: action.proteins,
				fats: action.fats,
				carbohydrates: action.carbohydrates
			}
			return [...state, product];
		case types.DELETE_PRODUCT:
			const index = state.findIndex(product => product.id === action.id);
			console.log(index);
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];
		default:
			return state;
	}
}