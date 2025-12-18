import React from 'react';

function Catalog() {
  const mockProducts = [
    { id: 1, name: 'Товар 1', price: 1000 },
    { id: 2, name: 'Товар 2', price: 2000 },
    { id: 3, name: 'Товар 3', price: 3000 },
  ];

  return (
    <div className="catalog">
      <h1>Каталог товаров</h1>
      <div className="catalog__grid">
        {mockProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
