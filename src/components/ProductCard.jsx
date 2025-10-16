import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border p-4 rounded shadow hover:scale-105 transition-transform duration-200">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
      <h2 className="font-bold">{product.name}</h2>
      <p>R$ {product.price}</p>
      <button 
        className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
        onClick={() => addToCart(product)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
