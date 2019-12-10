import React from 'react';

import store from "../store/store";
import {addProduct} from "../store/actions";

import Button from '../items/button/button';
import Input from '../items/input/input';
import './calculator.scss';

class AddTaskComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openForm: false,
			nameProduct: '',
			count: '',
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
		console.log(event.target.value);
		const {name, value} = event.target;
		switch (name) {
			case 'nameProduct':
				this.setState({ nameProduct: value});
				break;
			case 'count':
				this.setState({count: value});
				break;
			default:
				break;
		}
	}

	handleSubmit = e => {
	    const {
	      nameProduct, count
	    } = this.state;
	    const {tasks} = this.props;
	    e.preventDefault();
    	const date = new Date();
    	let S4 = () => {
	    	return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
    	const timeValue = `${date.getHours()}:${date.getMinutes()}`;
    	const id = S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4();
    	console.log(id);
    	store.dispatch(addProduct(id, timeValue, nameProduct, count));
	}

	render() {
		let form;
    	if (this.state.openForm === false) {
    		form = (
    			<div className='calculator'>
        			<Button  onClick={this.onOpen} label="add product" className='button__addproduct'/>
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
			                  label="nameProduct"
			                  onChange={this.handleChange}
			                  value={this.state.nameProduct}
			                />
			                 <Input
			                 name="count"
			                 type="text"
			                 label="count"
			                  onChange={this.handleChange}
			                  value={this.state.count}
			                />
			                </div>
			            <div className='calculator_footer'>
			              <Button type="submit" label="+"/>
			              <Button onClick={this.onClose} label="Close"/>
			            </div>
	          		</form>
	        	</div>
	      );
	    }
	    return (
	      <>
	        <div>{form}</div>
	      </>
	    );
	}
}

export default AddTaskComponent;
