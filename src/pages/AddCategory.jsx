import { useState } from "react";
import axios from "axios";

function AddCategory() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:8080/api/categories",
                {
                    name,
                    description
                }
            );

            alert(res.data.msg || "Category added successfully");

            setName("");
            setDescription("");
        } catch (err) {
            console.log(err);
            alert("Unable to add category");
        }
    };

    return (
        <div>
            <h1>Add Category</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter category name"
                        required
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        placeholder="Enter category description"
                    ></textarea>
                </div>

                <button type="submit">
                    Add Category
                </button>
            </form>
        </div>
    );
}

export default AddCategory;