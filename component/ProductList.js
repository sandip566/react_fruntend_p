import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            let result = await fetch("http://localhost:5000/products");
            result = await result.json();
            setProducts(result);
        } catch (error) {
            setError(`Error fetching products: ${error.message}`);
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            let result = await fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE',
            });

            if (!result.ok) {
                const errMsg = await result.text();
                throw new Error(`Failed to delete product: ${errMsg}`);
            }

            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            setError(`Error deleting product: ${error.message}`);
            console.error('Error:', error);
        }
    };

    return (
        <div className="product-list-container">
            <div className="product-list">
                <h1>Service List</h1>
                {error && <p className="error">{error}</p>}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map(product => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.company}</td>
                                    <td>
                                        <Link to={`/update/${product._id}`} className="edit-button">Edit</Link>
                                        <button onClick={() => handleDelete(product._id)} className="delete-button">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No service available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
