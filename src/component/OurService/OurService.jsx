import React from 'react';
import '../../style/OurService.scss'
import img1 from '../../image/product.svg'
import img2 from '../../image/forest.svg'
import img3 from '../../image/wedding-couple.svg'
import img4 from '../../image/dress.svg'


const OurService = () => {
    const service = [
        {
            icon: img1,
            text1: 'Product Photography',
            text2: 'Lorem ipsum dolor sit amet consectetur'
        },{
            icon: img2,
            text1: 'Wildlife Photography',
            text2: 'Lorem ipsum dolor sit amet consectetur'
        },{
            icon: img3,
            text1: 'Wedding Photography',
            text2: 'Lorem ipsum dolor sit amet consecteturent'
        },{
            icon: img4,
            text1: 'Fashion Photography',
            text2: 'Lorem ipsum dolor sit amet consectetur'
        },
    ]
    return (
        <div className="OurService">
            <h1>Our Service</h1>
            <div className="container">
            {
                service.map((service) => (
                <div className="wraper">
                    <img className="icon" src={service.icon} alt="" />
                    <h4>{service.text1}</h4>
                    <h5>{service.text2}</h5>
                </div>
            ))
            }
            </div>
        </div>
    );
};

export default OurService;