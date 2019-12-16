import React from 'react';

import store from "../../store/store";
import {addProduct} from "../../store/actions";

import AddProductComponent from './AddProductComponent';
import ListProductsComponent from './ListProductsComponent';

function CalculatorComponent() {
	return (
		<>
			<AddProductComponent />
			<ListProductsComponent />
		</>
	);
}

export default CalculatorComponent;
