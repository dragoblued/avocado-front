import React from 'react';
import axios from 'axios';

import store from "../../store/store";
import {addProduct} from "../../store/actions";

import Button from '../items/button/button';
import Input from '../items/input/input'   ;

import './calculator.scss';

const ids = require('short-id');

class AddTaskComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openForm: false,
			nameProduct: '',
			count: '',
			loader: false,
		};
		this.onOpen = this.onOpen.bind(this);
    	this.onClose = this.onClose.bind(this);
	}

	onOpen() {
    	this.setState(() => ({
    		openForm: true,
    	}));
 	}

	onClose() {
		this.setState(() => ({
			openForm: false,
		}));
	}

	handleChange = event => {
		const { name, value } = event.target;
		switch (name) {
			case 'nameProduct':
				this.setState({ nameProduct: value });
				break;
			case 'count':
				this.setState({ count: value });
				break;
			default:
				break;
		}
	}

	handleSubmit = e => {
	    const { nameProduct, count } = this.state;
	    const date = new Date();
    	const time = `${date.getHours()}:${date.getMinutes()}`;
    	const id = ids.generate();
	    const address = 'https://api.edamam.com/api/nutrition-data?app_id=4b811aca&app_key=84ada378f9d168b82daf8bb4d3a7a53d&ingr='+count+'%20gram%20'+nameProduct;
	    this.setState({loader: true});
	    axios.get(address).then(response => {
	    	const data = response.data;
	    	const name = nameProduct;
	    	if (data.calories !== 0) {
	    		store.dispatch(addProduct(id, time, name, data.calories, data.totalDaily.PROCNT.quantity, data.totalDaily.FAT.quantity,  data.totalDaily.CHOCDF.quantity));
		    	let productPost = store.getState()[store.getState().length - 1];
			   	axios.post('http://localhost:8080/addproducts', productPost);
	    	}
	    	this.setState({loader: false});
	   	});
	    e.preventDefault();
	}

	render() {
		let form;
		let loader = <div className="cube-loader-own">
					    <div className="caption">
					      <div className="cube-loader">
					        <div className="cube loader-1"></div>
					        <div className="cube loader-2"></div>
					        <div className="cube loader-4"></div>
					        <div className="cube loader-3"></div>
					      </div>
					    </div>
				  	</div>;
		if (this.state.loader === false) {
			loader = <div></div>
		}
	    if (this.state.openForm === false) {
	    	form = (
	    		<div className='calculator'>
	        	<Button  onClick={this.onOpen} 
	        		label="ADD PRODUCT" 
	        		className='button__addproduct'/>
	        </div>
	      );
	    } else {
		    form = (
		      <div className='calculator'>
		        <form onSubmit={this.handleSubmit}>
				      <div className='calculator_input'>
				        <Input
				          name="nameProduct"
				          type="text"
				          label="NAME"
				          className="input"
				          onChange={ this.handleChange }
				          value={ this.state.nameProduct }
				        />
				        <Input
				          name="count"
				          type="text"
				          label="GRAM"
				          className="input"
				          onChange={ this.handleChange }
				          value={ this.state.count }
				        />
				      </div>
				      <div className='calculator_footer'>
				        <Button type="submit" label="+"/>
				        <Button onClick={ this.onClose } label="CLOSE"/>
				      </div>
		        </form>
		      </div>
		    );
		  }
		  return (
		    <>
		      <div>{ form }</div>
		       {loader}
		    </>
		  );
	}
}

export default AddTaskComponent;
