import React, { useEffect, useState } from "react";

import testImg_01 from "../images/test_pens.jpg";
import testImg_02 from "../images/test_pens_02.jpg";

export default function ProductGrid() {
 
  // This method fetches the accounts from the database.
  useEffect(() => {
    
  }, []);
 
  // This following section will display the table with the accounts of individuals.
  return (
    <div className="inner">
      <div className="product-grid">
        <div className="product">
          <div className="image"><img src={testImg_01}></img></div>
          
          <div className="name">Pens</div>
          <div className="price">£ 45.00</div>
          <div className="basket">ICON</div>
        </div>

        <div className="product">
          <div className="image"><img src={testImg_02}></img></div>
          
          <div className="name">Pens</div>
          <div className="price">£ 45.00</div>
          <div className="basket">ICON</div>
        </div>

        <div className="product">
          <div className="image"><img src={testImg_01}></img></div>
          
          <div className="name">Pens</div>
          <div className="price">£ 45.00</div>
          <div className="basket">ICON</div>
        </div>

        <div className="product">
          <div className="image"><img src={testImg_02}></img></div>
          
          <div className="name">Pens</div>
          <div className="price">£ 45.00</div>
          <div className="basket">ICON</div>
        </div>

        <div className="product">
          <div className="image"><img src={testImg_01}></img></div>
          
          <div className="name">Pens</div>
          <div className="price">£ 45.00</div>
          <div className="basket">ICON</div>
        </div>

        <div className="product">
          <div className="image"><img src={testImg_01}></img></div>
          
          <div className="name">Pens</div>
          <div className="price">£ 45.00</div>
          <div className="basket">ICON</div>
        </div>
      </div>
    </div>
  );
}