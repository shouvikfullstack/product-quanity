import React, { useState, useEffect } from "react";

import "./styles.css";
import CartComponent from "./page/CartComponent";
import data from "./data.json";
export default function App() {
  const [orderDetails] = useState(
    data.data.filter((item) => item.orderDetails.length > 0)
  );

  return (
    <div className="App">
      <CartComponent orderDetails={orderDetails} />
    </div>
  );
}
