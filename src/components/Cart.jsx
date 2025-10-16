import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className="col-span-1 p-4 border rounded shadow bg-white">
      <h2 className="font-bold mb-2">Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.name} x {item.qty}</span>
              <div className="flex items-center gap-2">
                <input 
                  type="number" min="1" value={item.qty}
                  className="w-12 border rounded px-1"
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
                <button 
                  className="text-red-500 font-bold"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold">Total: R$ {total}</div>
    </div>
  );
}
