import React from "react";

import AddProductComponent from "./AddProductComponent";
import ListProductsComponent from "./ListProductsComponent";

function CalculatorComponent() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <AddProductComponent />
      <ListProductsComponent />
    </>
  );
}

export default CalculatorComponent;
