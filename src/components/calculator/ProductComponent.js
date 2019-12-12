import React from 'react';
import PropTypes from 'prop-types';

import Button from '../items/button/button';
import './calculator.scss';
class ProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deleteProduct: false,
		};
		this.handleDelete = this.handleDelete.bind(this);
	}
 	handleDelete = () => {
 		this.setState({
 			deleteProduct: true,
 		})
 	}
 	render() {
 		const {product} = this.props;
 		console.log(product);
 		let item;
 		if (this.state.deleteProduct === false) {
 			item = (
	 			<div className="list_products_item">
	 				<p>{product.time}</p>
					<p>{product.name}</p>
					<p>{product.calories.toFixed(1)}</p>
					<p>{product.fats.toFixed(1)}/{product.proteins.toFixed(1)}/{product.carbohydrates.toFixed(1)}</p>
		            <Button onClick={this.handleDelete}  className="button_delete">
		            </Button>
				</div>);
 		}
 		return(
 			<div>
 			{item}
 			</div>
 		);
 	}
}
export default ProductComponent;