import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="product-detail"><p>Загрузка...</p></div>;
  }

  if (error) {
    return <div className="product-detail"><p>Ошибка: {error}</p></div>;
  }

  if (!product) {
    return <div className="product-detail"><p>Товар не найден</p></div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="product-detail__price">{product.price} ₽</p>
      <p className="product-detail__description">{product.description}</p>
      <p className="product-detail__stock">В наличии: {product.stock} шт.</p>
      <button className="btn btn-primary">Добавить в корзину</button>
    </div>
  );
}

export default ProductDetail;
