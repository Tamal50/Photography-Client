import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Service.scss'

const Service = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])
    return (
        <div className="Service" id="Service">
                <h1>Service</h1>
                <div className="container">
                {
                    product.map((product) =>(
                      <div className="service">
                           <div className="image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="details">
                        <h1>{product.name}</h1>
                        <p>{product.details}</p>
                        <h2>Price: $100</h2>

                    </div>
                    <div className="button">
                    <Link to={"/product/"+product._id}>View More</Link>
                    <Link to={"/order/"+product._id}>Buy now</Link>
                    </div>
                      </div>              

                
                    ))
                }
                </div>
        </div>
    );
};

export default Service;