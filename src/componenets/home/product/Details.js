// Detail.js

import React, { useContext } from "react";
import { DataContext } from "../../../Context";
import formatCurrency from "../../../Util";

const Detail = () => {
  const value = useContext(DataContext);
  const product = value.product;
  
  return (
    <div >

    </div>
  );
};

export default Detail;
