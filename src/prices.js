import React from 'react';

export default function Product() {
  const prices = [20, 55, 70, 40];
  const res = prices.map((price) => (price * 40) / 100);
  return (
    <div>
      <h1>Map Functions</h1>
      {console.log({ res })}
    </div>
  );
}
