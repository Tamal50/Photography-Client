import React, {  useState } from 'react';
import Layout from '../../Layout';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AllOrder = () => {
    const history = useHistory();
    
    const { from } =  { from: { pathname: "/dashboard" } };
    const [oder , setOder] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/adminOderDetails')
        .then(res => res.json())
        .then(data => setOder(data));
    }, [])

    const update = (id) => {
        const status = document.getElementById('status').value;
        const product = {id: id, status: status}

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result => {
               alert("Status Updateed")
               history.replace(from);
        })
        

    }
    return (
        <Layout>
               <center> <h1>You have : {oder.length}  Oder</h1></center>                
                <div className="row">   
      {oder.map((oder) => (
        <div class="card col-5 m-5">
          <div className="row">
          <div class="col-4">
            <center><img style={{height: "100px" , marginTop: "30px"}} src={oder?.product.image} alt="..."></img></center>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{oder?.product?.name}</h5>
              <h5 class="card-title">Price : ${oder?.product?.price}</h5>
              <p class="card-title">Odered email : {oder?.email}</p>
              <p class="card-text">Oder Time : {oder?.oderTime}</p>
              <p class="card-text">Status : {oder?.status}</p>
              <input id="status"></input>
              <button className="btn btn-primary mt-2" onClick={() =>update(oder._id)}>update status</button>
            </div>
            </div>
          </div>
      </div>
      ))}
    </div>
        </Layout>
    );
};

export default AllOrder;