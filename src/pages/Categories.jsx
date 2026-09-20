import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Categories.css";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/categories")
            .then((res) => {
                console.log("Categories from database:", res.data);
                setCategories(res.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            });
    }, []);

    const categoryImages = {
        "Protein & Supplements": "/images/protien.png",
        "Yoga & Fitness": "/images/yoga.png",
        "Gym Equipment": "/images/supplements.png",
        "Accessories": "/images/accessories.png",
    };

    return (
        <section className="categories-page">

            {/* Hero */}
            <div className="categories-hero">
                <div className="categories-hero-content">
                    <span>YOOPIN COLLECTION</span>

                    <h1>
                        Train Hard.
                        <br />
                        <strong>Live Strong.</strong>
                    </h1>

                    <p>
                        Explore everything you need for your
                        fitness journey.
                    </p>
                </div>
            </div>

            {/* Categories */}
            <div className="categories-container">

                <div className="categories-heading">
                    <span>SHOP BY CATEGORY</span>

                    <h2>
                        Find What <strong>Moves You</strong>
                    </h2>

                    <p>
                        From everyday essentials to serious
                        training gear, discover products made
                        for your fitness goals.
                    </p>
                </div>

                <div className="categories-grid">

                    {categories.map((category, index) => {

                        // Remove extra spaces from database category name
                        const categoryName = category.name?.trim();

                        return (
                            <div
                                className="category-card"
                                key={category.id}
                            >

                                {/* Image */}
                                <div className="category-image">

                                    <img
                                        src={
                                            categoryImages[categoryName]
                                        }
                                        alt={categoryName}
                                    />

                                    <div className="category-overlay"></div>

                                    <span className="category-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                                {/* Content */}
                                <div className="category-content">

                                    <h3>
                                        {categoryName}
                                    </h3>

                                    <p>
                                        {category.description ||
                                            "Explore premium fitness products designed to support your training and lifestyle."}
                                    </p>

                                    <button type="button">
                                        Explore Category
                                        <span>→</span>
                                    </button>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default Categories;