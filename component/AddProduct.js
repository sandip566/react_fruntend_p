import React from "react";
import "./AddProduct.css"
const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError]=React.useState(false)

    const addService= async()=>{

        console.log(!name);
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        

            console.log(name,price,category,company);
            const userId= JSON.parse(localStorage.getItem('user'))._id;
            let result =await fetch("http://localhost:5000/add-product",{
                method:'post',
                body:JSON.stringify({name,price,category,company,userId}),
                headers:{
                    "Content-Type":"application/json",
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

                }
            });
            result=await result.json();
            console.log(result );
    }

    return (
        <div className="product">
            <h1>Add Service</h1>
            <input type="text" placeholder="Enter service name (e.g Machine loading)"className="inputBox"
           value={name}      onChange={(e)=>{setName(e.target.value)}} 
            />
           {error && !name  &&<span className="invalid-input">Enter valid  name:</span>}

            <input type="text" placeholder="Enter service price (e.g 2,00,000)"className="inputBox"
             value={price} onChange={(e)=>{setPrice(e.target.value)}} 
             />
           {error && !price  &&<span className="invalid-input">Enter valid  price:</span>}

            <input type="text" placeholder="Enter service category (e.g power press machine)"className="inputBox"
            value={category} onChange={(e)=>{setCategory(e.target.value)}} 
             /> 
           {error && !category  &&<span className="invalid-input">Enter valid  categoty:</span>}

            <input type="text" placeholder="Enter your company (e.g Baap company)"className="inputBox"
             value={company}  onChange={(e)=>{setCompany(e.target.value)}} 
             />
            {error && !company  &&<span className="invalid-input">Enter valid  company:</span>}

            <button onClick={addService} type="button" className="but">Add service</button>
        </div>
    )
}
export default AddProduct;