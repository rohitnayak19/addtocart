import React from 'react';

const Cart = ({ cart, setCart }) => {
  // Function to remove product from the cart

  const removeItem = (itemId) => {
    setCart((prevItem) => prevItem.filter((item) => item.id !== itemId));
  }
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className='bg-red-600 text-white font-semibold p-1 rounded-md'>
                remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
