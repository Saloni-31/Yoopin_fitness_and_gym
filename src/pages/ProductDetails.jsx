import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    console.log("ProductDetails addToCart:", addToCart);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then((res) => {
                const foundProduct = res.data.find(
                    (item) => item.id === Number(id)
                );

                setProduct(foundProduct);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div>
            {product.image && (
                <img
                    src={`http://localhost:8080/uploads/${product.image}`}
                    alt={product.name}
                    width="400"
                />
            )}

            <h1>{product.name}</h1>

            <p>{product.description}</p>

            <p>Category: {product.category_name}</p>

            <h2>₹{product.price}</h2>

            <p>Stock: {product.stock ?? 0}</p>

            <button
                onClick={() => {
                    console.log("Adding product:", product);
                    addToCart(product);
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetails;