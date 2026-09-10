import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("yoopin-wishlist");

        return savedWishlist
            ? JSON.parse(savedWishlist)
            : [];
    });

    const saveWishlist = (updatedWishlist) => {
        setWishlist(updatedWishlist);

        localStorage.setItem(
            "yoopin-wishlist",
            JSON.stringify(updatedWishlist)
        );
    };

    const addToWishlist = (product) => {

        const alreadyAdded = wishlist.some(
            (item) => item.id === product.id
        );

        if (alreadyAdded) {
            return;
        }

        const updatedWishlist = [
            ...wishlist,
            product
        ];

        saveWishlist(updatedWishlist);
    };

    const removeFromWishlist = (productId) => {

        const updatedWishlist = wishlist.filter(
            (item) => item.id !== productId
        );

        saveWishlist(updatedWishlist);
    };

    const isInWishlist = (productId) => {

        return wishlist.some(
            (item) => item.id === productId
        );
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                isInWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}