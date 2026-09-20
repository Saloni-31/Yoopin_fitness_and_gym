import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("yoopin-cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    console.log("CartProvider render, cart:", cart);

    const addToCart = (product) => {
        console.log("Product added:", product);

        setCart((prevCart) => {

            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );

            let updatedCart;

            if (existingProduct) {

                updatedCart = prevCart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: (item.quantity || 1) + 1,
                        }
                        : item
                );

            } else {

                updatedCart = [
                    ...prevCart,
                    {
                        ...product,
                        quantity: 1,
                    },
                ];
            }

            localStorage.setItem(
                "yoopin-cart",
                JSON.stringify(updatedCart)
            );

            return updatedCart;
        });

        alert("Product added to cart!");
    };

    const updateCart = (updatedCart) => {
        setCart(updatedCart);

        localStorage.setItem(
            "yoopin-cart",
            JSON.stringify(updatedCart)
        );
    };

    const clearCart = () => {
        setCart([]);

        localStorage.removeItem("yoopin-cart");
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart: updateCart,
                addToCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;