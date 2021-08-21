import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import PaymentDetails from './PaymentDetails/PaymentDetails';
import '../../style/OrderPage.scss'

const OrderPage = (props) => {
  const [logInUser, setLogInUser] = useContext(UserContext);
    const {_id} = useParams();
    const [Product, setProduct] = useState([])
    useEffect(()=>{
      fetch(`https://picsmania0.herokuapp.com/product/${_id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
    })
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = data => {
    
    const oderDetails = {email: logInUser.email , product: Product , shipmentInfo: data , oderTime: new Date(), status: "pending"}
    fetch('https://picsmania0.herokuapp.com/order', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(oderDetails)
       })
       .then(res => res.json())
       .then(data => {
         if(data){
           alert("Your oder successfully please pay for confirm")
         }
       })
      console.log(oderDetails)

}
    return (
        <div style={{height:'100vh', marginTop: '50px'}} className="row ">
          <div style={{textAlign: 'center'}} className="col-md-6">
            <h1>Name : {Product.name}</h1>
            <h3>Price: {Product?.price}$</h3>
            <p>{Product.details}</p>
            <img src={Product.image} alt="" />
          </div>
            <div style={{textAlign: 'center'}} className="col-md-6 input">
            <form style={{marginLeft: '140px', marginButton: '20px'}} className="ship-form" onSubmit={handleSubmit(onSubmit)}>

<input {...register("username", { required: true })} placeholder="Your Name"/>
{errors.name && <span className="error">This Name is required</span>}
<br/>
<input  defaultValue={logInUser?.email}{...register("email", { required: true })} placeholder="Your E-mail"/>
{errors.email && <span className="error">This Email is required</span>}
<br/>
<input {...register("address", { required: true })} placeholder="Your Address"/>
{errors.address && <span className="error">This Address is required</span>}
<br/>
<input {...register("phone", { required: true })} placeholder="Your Phone"/>
{errors.phone && <span className="error">This phone is required</span>}
<br/>
<input type="submit" />
</form>
            <PaymentDetails className="Payment"></PaymentDetails>
            </div>
        </div>
    );
};

export default OrderPage;