import React from 'react';
import Header from '../components/Header.jsx';
import ProductList from '../components/ProductList.jsx';
import Cart from '../components/Cart.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4 grid grid-cols-4 gap-6">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
