import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import store from '../store/store';
import products from '../products';

class ListProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listproducts: [],
			add: 1,
		}
		store.subscribe(()=> {
			products.push(store.getState());
			this.setState({
				add: this.state.add++,
			});
		});
	}
	componentDidMount() {
	    axios.get('http://localhost:8080/addproducts').then(response => {
	      const list= response.data.data;
	      this.setState({ listproducts: list });
	      console.log(this.state.listproducts);
	    })
  	}
	render() {
		let listItems = this.state.listproducts.map ((number) => {
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