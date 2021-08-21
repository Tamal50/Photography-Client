import React, {   useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Layout from "../../Layout";

const AddProduct = () => {
    const [productFrom, setProductFrom] = useState({})
    const history = useHistory();

    const { from } =  { from: { pathname: "/" } };

    const handleOnChange = (e) => {
        const newForm = {...productFrom}
        newForm[e.target.name]= e.target.value
        console.log(newForm)
        setProductFrom(newForm)
        console.log(productFrom)
      }
      const handleAddProduct = (e) => {
        e.preventDefault()
           fetch('https://picsmania0.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
              "Content-Type": 'application/json'
            },
            body: JSON.stringify(productFrom)
           })
          .then(res => res.json())
          .then(result =>{
            if(result){
               
              alert("Your product added successfully")
              history.replace(from);

            }
          })
          
        };

        

  return (
    <Layout>
      <div>
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <p>
          <span>Product Name : </span>
          <input
            onChange={handleOnChange}
            name="name"
            value={productFrom.name}
          ></input>
        </p>
        <p>
          <span>Product price : </span>
          <input
            onChange={handleOnChange}
            name="price"
            value={productFrom.price}
          ></input>
        </p>
        <p>
          <span>Picture url : </span>
          <input
            onChange={handleOnChange}
            name="image"
            value={productFrom.url}
          ></input>
        </p>
        <p>
          <span>Product Details : </span>
          <input
          // style={{height: '100px', width: '600px'}}
            onChange={handleOnChange}
            name="details"
            value={productFrom.details}
          ></input>
        </p>
        <p>For Better image hosting use <a target="_blank" href="https://imgbb.com/">imgbb</a></p>
        <button className="btn btn-primary"type="submit">ADD Product </button>
      </form>

    </div>
    </Layout>

  );
};

export default AddProduct;
