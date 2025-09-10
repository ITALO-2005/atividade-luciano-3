import React from 'react';
import ProductCard from './components/ProductCard'; // Importando o componente do card
import './App.css'; // Importando estilos gerais do App

// 2. COMPONENTE PRINCIPAL: App
// Ele contém a lista de produtos e renderiza um ProductCard para cada um.
function App() {
  // Array de objetos com os dados dos produtos.
  const products = [
    { id: 1, name: 'Smartphone Pro X', price: 2999.90, description: 'Câmera de 108MP, 256GB de armazenamento e tela AMOLED.', imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=Smartphone' },
    { id: 2, name: 'Notebook UltraSlim', price: 5499.00, description: 'Processador de última geração, leve e com bateria de longa duração.', imageUrl: 'https://placehold.co/600x400/9b59b6/ffffff?text=Notebook' },
    { id: 3, name: 'Fone Bluetooth SoundWave', price: 349.50, description: 'Cancelamento de ruído ativo e qualidade de som imersiva.', imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Fone' },
    { id: 4, name: 'Smartwatch Fit+', price: 899.99, description: 'Monitoramento completo de saúde, GPS integrado e à prova d\'água.', imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=Smartwatch' },
    { id: 5, name: 'Câmera DSLR Vision 4K', price: 4200.00, description: 'Grave vídeos em 4K e tire fotos com qualidade profissional.', imageUrl: 'https://placehold.co/600x400/f1c40f/ffffff?text=Câmera' },
    { id: 6, name: 'Tablet GraficPad', price: 1850.00, description: 'Ideal para designers e artistas, com caneta de alta precisão.', imageUrl: 'https://placehold.co/600x400/1abc9c/ffffff?text=Tablet' },
  ];

  return (
    <div className="app-container">
      <h1 className="main-title">Nossos Produtos</h1>
      
      {/* Container para a lista de produtos.
        Usamos o método .map() para iterar sobre o array 'products'.
      */}
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id} // A 'key' é essencial para o React
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
