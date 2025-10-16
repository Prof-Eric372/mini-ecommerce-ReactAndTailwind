import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Header() {
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, p) => sum + p.qty, 0);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mini Ecommerce Advanced</h1>
      <div className="relative">
        <span className="material-icons">shopping_cart</span>
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
            {totalQty}
          </span>
        )}
      </div>
    </header>
  );
}
