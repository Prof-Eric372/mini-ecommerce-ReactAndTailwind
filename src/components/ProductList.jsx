import React from 'react';
import products from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function ProductList() {
  return (
    <div className="col-span-3 grid grid-cols-3 gap-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
