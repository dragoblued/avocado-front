import React from "react";
import axios from "axios";

import store from "../../store/store";
import { addProduct } from "../../store/actions";

import ProductComponent from "./ProductComponent";
import "./calculator.scss";

class ListProductComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      add: 1
    };
    store.subscribe(() => {
      this.setState({
        add: this.state.add++
      });
    });
  }

  componentDidMount() {
    axios.get("http://localhost:8080/addproducts").then(response => {
      const list = response.data.data;
      for (let i = 0; i < list.length; i++) {
        store.dispatch(
          addProduct(
            list[i].id,
            list[i].time,
            list[i].name,
            list[i].calories,
            list[i].proteins,
            list[i].fats,
            list[i].carbohydrates
          )
        );
      }
    });
  }

  render() {
    let listproducts = store.getState();
    let listItems = listproducts.map(number => {
      return (
        <li key={number.id}>
          <ProductComponent product={number} />
        </li>
      );
    });
    return (
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
}

export default ListProductComponent;
