import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 scroll">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="h-32 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-green-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
