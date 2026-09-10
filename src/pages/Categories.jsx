import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>Categories</h2>

            {categories.map((category) => (
                <div key={category.id}>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Categories;