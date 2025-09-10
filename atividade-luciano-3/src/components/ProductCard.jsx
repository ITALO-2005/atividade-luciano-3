import React from 'react';
import './ProductCard.css'; 

function ProductCard({ name, price, description, imageUrl }) {
  
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="product-card">
      <img src={imageUrl} alt={`Imagem de ${name}`} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">
          {formattedPrice}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
