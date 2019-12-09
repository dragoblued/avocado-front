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
 		console.log(product.nameProduct);
 		let item;
 		if (this.state.deleteProduct === false) {
 			item = (
	 			<div>
	 				<p>{product.date}</p>
					<p>{product.nameProduct}</p>
					<p>{product.count}</p>
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