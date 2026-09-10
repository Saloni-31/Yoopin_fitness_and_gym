import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log("CartProvider render, cart length:", cart.length);

    const addToCart = (product) => {
        console.log("Product added:", product);

        setCart((prevCart) => {
            const newCart = [...prevCart, product];
            console.log("Cart after adding:", newCart);
            return newCart;
        });

        alert("Product added to cart!");
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;