import React from 'react';
export default function Keys() {
  const gadgetList = [
    { id: 1, name: 'watch', price: '14000' },
    { id: 2, name: 'smartphone', price: '72900' },
    { id: 3, name: 'tablet', price: '46000' },
  ];
  return (
    <div>
      <h1>Keys</h1>
      {gadgetList.map((list) => (
        <li key={list}>
          {list.name}: {list.price} inr
        </li>
      ))}
    </div>
  );
}
