import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import store from '../store/store';
import products from '../products';
import './calculator.scss';

class ListProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listproducts: [],
			add: 1,
		}
		store.subscribe(()=> {
			this.state.listproducts.push(store.getState());
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
			<ul className="list_products">
				<li className="list_products_head">
	 				<p>time</p>
					<p>name</p>
					<p>calories</p>
					<p>P/F/C</p>
				</li>
				{listItems}
			</ul>
		);
	}
};
export default ListProductComponent;