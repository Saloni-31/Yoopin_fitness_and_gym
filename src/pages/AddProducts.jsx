import axios from "axios";
import { useEffect, useState } from "react";

const AddProduct = () => {
    const [categories, setCategories] = useState([]);

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category_id: "",
        stock: ""
    });

    const [image, setImage] = useState(null);

    // Fetch categories
    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // Handle text inputs
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    // Handle image
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    // Add product
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("category_id", product.category_id);
        formData.append("stock", product.stock);

        if (image) {
            formData.append("image", image);
        }

        try {
            const res = await axios.post(
                "http://localhost:8080/api/products/addproducts",
                formData
            );

            console.log(res.data);
            alert("Product added successfully!");

            setProduct({
                name: "",
                description: "",
                price: "",
                category_id: "",
                stock: ""
            });

            setImage(null);

        } catch (err) {
            console.log(err);
            alert("Unable to add product");
        }
    };

    return (
        <div>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                <div>
                    <label>Category</label>

                    <select
                        name="category_id"
                        value={product.category_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>

                        {categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">
                    Add Product
                </button>

            </form>
        </div>
    );
};

export default AddProduct;