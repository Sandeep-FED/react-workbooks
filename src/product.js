import React from 'react';

export default function Product() {
  const ProductList = ['Airpods', 'Galaxy Watch', 'S22', 'Gaming Laptop'];
  return (
    <div>
      <h2>Product Lists</h2>
      {ProductList.map((product) => (
        <li>{product}</li>
      ))}
    </div>
  );
}
