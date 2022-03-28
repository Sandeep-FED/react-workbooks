import React from 'react';
export default function ArrayRender() {
  const fruits = ['Orange', 'Apple', 'Banana', 'Mango'];
  return (
    <div>
      <h1>Array Rendering</h1>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </div>
  );
}
