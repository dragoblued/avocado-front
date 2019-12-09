import React from 'react';
import store from "../store/store";
import {addProduct} from "../store/actions";

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
    			<div>
        			<button onClick={this.onOpen}>
        			Add task
          			</button>
        		</div>
      		);
    	} else {
	    	form = (
	        	<div>
	        		<form onSubmit={this.handleSubmit}>
			              <div>
			                <input
			                  name="nameProduct"
			                  type="text"
			                  label="nameProduct"
			                  onChange={this.handleChange}
			                  value={this.state.nameProduct}
			                />
			                 <input
			                 name="count"
			                 type="text"
			                 label="count"
			                  onChange={this.handleChange}
			                  value={this.state.count}
			                />
			                </div>
			            <div>
			              <button type="submit">
			                Input
			              </button>
			              <button onClick={this.onClose}>
			              Close
			              </button>
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
