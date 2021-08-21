import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import home from '../../image/home.svg';
import '../../style/ProductPage.scss'

const ProductPage = () => {

    const {_id} = useParams();
    const [orderProduct, setOrderProduct] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${_id}`)
        .then(res => res.json())
        .then(data => setOrderProduct(data))
      }, [])

    return (
        <div className="product">
            <a href="/"><img style={{height: '100px'}} alt="" src={home}></img></a>
           <div style={{backgroundColor: 'gray', height: '85vh'}}className="row wraper">
           <div className="left  col-sm-5">
                <img src={orderProduct.image}  />
            </div>
            <center className="right  col-sm-6">
                <h1>{orderProduct.name}</h1>
                <h1>price: {orderProduct.price}$</h1>
                <p>{orderProduct.details}</p>
                <Link to={"/order/"+orderProduct._id}><button className="btn btn-primary">Buy Now</button></Link>
            </center>
           </div>
        </div>
    );
};

export default ProductPage;