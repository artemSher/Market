import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Link } from 'react-router-dom';

function Catalog() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div className="catalog"><p>Загрузка...</p></div>;
  }

  if (error) {
    return <div className="catalog"><p>Ошибка: {error}</p></div>;
  }

  return (
    <div className="catalog">
      <h1>Каталог товаров</h1>
      <div className="catalog__grid">
        {products.length === 0 ? (
          <p>Товары не найдены</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <Link to={`/product/${product._id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.price} ₽</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Catalog;
