import React from 'react';
import PropTypes from 'prop-types';

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
	 			<div>
	 				<p>{product.time}</p>
					<p>{product.name}</p>
					<p>{product.calories}</p>
					<p>{product.fats} - {product.proteins} - {product.carbohydrates}</p>
		            <button onClick={this.handleDelete}>
		            	delete
		            </button>
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