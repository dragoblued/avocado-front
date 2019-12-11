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

export const productReducer = (state = initialStates, action) => {
	switch (action.type) {
		case types.ADD_PRODUCT:
			return {
				...state, id: action.id, 
				time: action.time,
				name: action.name,
				calories: action.calories,
				proteins: action.proteins,
				fats: action.fats,
				carbohydrates: action.carbohydrates
			};
		default:
			return state;
	}
}