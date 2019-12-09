import types from './types';
export const addProduct = (id, date, nameProduct, count) => ({
	type: types.ADD_PRODUCT, id, date, nameProduct, count,
});