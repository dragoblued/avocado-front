import types from './types';

const initialStates = {
	"id": "",
	"date": "",
	"nameProduct": "",
	"count": "",
};

export const productReducer = (state = initialStates, action) => {
	switch (action.type) {
		case types.ADD_PRODUCT:
			return {
				...state, id: action.id, 
				date: action.date,
				nameProduct: action.nameProduct,
				count: action.count,
			};
		default:
			return state;
	}
}