import React from 'react';
import PropTypes from 'prop-types';

class ProductFromComponent extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      nameProduct: '',
      count: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

	handleInput = event => {
		let value = event.target.value;
		switch(value) {
			case 'nameProduct': this.setState({ nameProduct: value });
			case 'count': this.setState({count: value});
			default: break;
		} 
	};

	addProduct = () => {
   alert('hel');
  };
  
  render() {
    const { nameProduct, count, id } = this.state;

    return (
      <div className='task-form'>
        <input type='text' value={nameProduct} onChange={this.handleInput} />
        <input type='text' value={count} onChange={this.handleInput} />
        <button onClick={this.addProduct} label="addProduct" >addProduct</button>
      </div>
    );
  }
} 

export default ProductFromComponent;