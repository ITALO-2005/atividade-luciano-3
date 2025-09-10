import React from 'react';
import './ProductCard.css'; // Importando o CSS específico para este componente

// 1. COMPONENTE REUTILIZÁVEL: ProductCard
// Ele recebe as informações do produto via props e as exibe.
function ProductCard({ name, price, description, imageUrl }) {
  
  // Formata o preço para o padrão brasileiro (R$)
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
