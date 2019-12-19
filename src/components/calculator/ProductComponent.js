import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import store from "../../store/store";
import { deleteProduct } from "../../store/actions";

import Button from "../items/button/button";

import "./calculator.scss";

class ProductComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    let id = this.props.product.id;
    store.dispatch(deleteProduct(this.props.product.id));
    axios.delete("http://localhost:8080/addproducts", {
      data: this.props.product
    });
  }

  render() {
    const { product } = this.props;
    let item = (
      <div className="list_products_item">
        <p>{product.time}</p>
        <p>{product.name}</p>
        <p>{product.calories.toFixed(1)}</p>
        <p>
          {product.fats.toFixed(1)}/{product.proteins.toFixed(1)}/
          {product.carbohydrates.toFixed(1)}
        </p>
        <Button onClick={this.handleDelete} className="button_delete"></Button>
      </div>
    );

    return <div>{item}</div>;
  }
}

export default ProductComponent;
