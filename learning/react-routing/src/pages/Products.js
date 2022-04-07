import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/products/p1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">Product 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
