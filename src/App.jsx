import React, { useState } from 'react'
import clothesProducts from './clothesProducts'
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addtocart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <>
      {clothesProducts.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {clothesProducts.map((product) => (
            <div
              key={product.id}
              className="w-60 p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">{product.name}</span>
                <span className="text-lg font-bold text-blue-500">${product.price}</span>
              </div>
              <button onClick={() => addtocart(product)} className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Add to cart
              </button>
            </div>
          ))}
        </div>

      ) : (
        <p>No product list</p>
      )}

      <Cart cart={cart} setCart={setCart} />
    </>
  )
}

export default App