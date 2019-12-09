import React from 'react';
import PropTypes from 'prop-types';
import ProductComponent from './ProductComponent';
import store from '../store/store';
import products from '../products';

class ListProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			add: 1,
		}
		store.subscribe(()=> {
			products.push(store.getState());
			this.setState({
				add: this.state.add++,
			});
		});
	}
	render() {
		let listItems = products.map ((number) => {
			return (<li><ProductComponent product={number}/></li>)
		});
		return(
			<ul>
			{listItems}
			</ul>
		);
	}
};
export default ListProductComponent;