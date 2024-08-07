import React, { useEffect, useState } from 'react';
import "./UpdateProduct.css";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [id]);

    const getProductDetails = async () => {
        try {
            let response = await fetch(`http://localhost:5000/product/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }
            let result = await response.json();
            setName(result.name);
            setPrice(result.price);
            setCategory(result.category);
            setCompany(result.company);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const updateService = async () => {
        try {
            let response = await fetch(`http://localhost:5000/product/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ name, price, category, company }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            let result = await response.json();
            console.log(result);
            navigate('/');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className='update_service'>
            <h1>Update Service</h1>
            <input 
                type="text" 
                placeholder="Enter service name (e.g Machine loading)" 
                className="inputBox"
                value={name}      
                onChange={(e) => setName(e.target.value)} 
            />

            <input 
                type="text" 
                placeholder="Enter service price (e.g 2,00,000)" 
                className="inputBox"
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
            />

            <input 
                type="text" 
                placeholder="Enter service category (e.g power press machine)" 
                className="inputBox"
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
            /> 

            <input 
                type="text" 
                placeholder="Enter your company (e.g Baap company)" 
                className="inputBox"
                value={company}  
                onChange={(e) => setCompany(e.target.value)} 
            />

            <button onClick={updateService} type="button" className="but">Update service</button>
        </div>
    );
}

export default UpdateProduct;
