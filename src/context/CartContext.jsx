import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      {
        id: 1,
        name: "Joy Tee",
        price: 1499,
        src: "https://www.xenpachi.com/wp-content/uploads/2023/08/joy_listin.jpg",
      },
      {
        id: 2,
        name: "Daddy's Here",
        price: 1999,
        src: "https://www.xenpachi.com/wp-content/uploads/2024/03/daddy_here_listing-compressed.webp",
      },
      {
        id: 3,
        name: "Invincible",
        price: 1799,
        src: "https://www.xenpachi.com/wp-content/uploads/2024/07/invincible_listingb.jpg",
      },
      {
        id: 4,
        name: "Eclipse",
        price: 2199,
        src: "https://www.xenpachi.com/wp-content/uploads/2024/08/eclipse_listinge-600x800.jpg",
      },
      {
        id: 5,
        name: "Space Kimono",
        price: 2499,
        src: "https://www.xenpachi.in/wp-content/uploads/2025/06/space_kimono_listing-600x800.jpg",
      },
      {
        id: 6,
        name: "4 Elements Tee",
        price: 1599,
        src: "https://www.xenpachi.in/wp-content/uploads/2024/12/4elements_listinge-600x800.jpg",
      },
      {
        id: 7,
        name: "Day Sorcerer",
        price: 1899,
        src: "https://www.xenpachi.in/wp-content/uploads/2023/10/shirt_day_sorcerer_listing-600x800.jpg",
      },
      {
        id: 8,
        name: "Chainsaw Venom Hood",
        price: 2999,
        src: "https://www.xenpachi.in/wp-content/uploads/2025/10/chainsaw_venom_hood_listingg-600x800.jpg",
      },
      {
        id: 9,
        name: "Joy Hoodie",
        price: 2799,
        src: "https://www.xenpachi.in/wp-content/uploads/2026/02/joy_hoodie_listingf-600x800.jpg",
      },
      {
        id: 10,
        name: "Revenge Tee",
        price: 1699,
        src: "https://www.xenpachi.in/wp-content/uploads/2023/11/revenge_listingc-600x800.jpg.webp",
      },
      {
        id: 11,
        name: "6 Eyes Drop",
        price: 1499,
        src: "https://www.xenpachi.in/wp-content/uploads/2025/04/6eyes_listin-600x800.jpg",
      },
      {
        id: 12,
        name: "Infinite Vagabond",
        price: 3199,
        src: "https://www.xenpachi.in/wp-content/uploads/2025/06/infinite_vagabond_kimono_listin.jpg",
      },
    ];
    setProducts(fetchedProducts);
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      alert(`${product.name} added to Cart!`);
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // UPDATE: Quantity Decrease (Agar quantity 1 hai aur minus dabaya toh remove ho jayega)
  const decreaseQty = (id) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        // Agar quantity 1 thi, toh array se filter out (remove) kar do
        return prev.filter((item) => item.id !== id);
      }

      // Warna normally quantity 1 kam kar do
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
