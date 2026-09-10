import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const increaseQuantity = (index) => {
        const updatedCart = [...cart];

        updatedCart[index] = {
            ...updatedCart[index],
            quantity: (updatedCart[index].quantity || 1) + 1,
        };

        setCart(updatedCart);
    };

    const decreaseQuantity = (index) => {
        const updatedCart = [...cart];
        const currentQuantity = updatedCart[index].quantity || 1;

        if (currentQuantity > 1) {
            updatedCart[index] = {
                ...updatedCart[index],
                quantity: currentQuantity - 1,
            };

            setCart(updatedCart);
        }
    };

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((total, product) => {
        return total + Number(product.price) * (product.quantity || 1);
    }, 0);

    return (
        <div className="container py-5">

            <h2 className="mb-4">My Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((product, index) => (
                        <div
                            key={index}
                            className="border p-3 mb-3 d-flex align-items-center gap-4"
                        >

                            {product.image && (
                                <img
                                    src={`http://localhost:8080/uploads/${product.image}`}
                                    alt={product.name}
                                    width="150"
                                    height="150"
                                    style={{ objectFit: "cover" }}
                                />
                            )}

                            <div className="flex-grow-1">
                                <h3>{product.name}</h3>

                                <p>{product.description}</p>

                                <p>
                                    <strong>Price:</strong> ₹{product.price}
                                </p>

                                <div className="d-flex align-items-center gap-2">
                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => decreaseQuantity(index)}
                                    >
                                        -
                                    </button>

                                    <span>
                                        {product.quantity || 1}
                                    </span>

                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => increaseQuantity(index)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="btn btn-danger mt-3"
                                    onClick={() => removeItem(index)}
                                >
                                    Remove
                                </button>
                            </div>

                            <div>
                                <strong>
                                    ₹
                                    {Number(product.price) *
                                        (product.quantity || 1)}
                                </strong>
                            </div>

                        </div>
                    ))}

                    <div className="border-top pt-4 mt-4">
                        <h3>Total: ₹{totalPrice}</h3>

                        <button className="btn btn-dark mt-2">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;