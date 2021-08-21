import React from 'react';
import '../../style/Client.scss'

const Client = () => {

    const intro = [
        {
            number: '567',
            text1: 'Happy',
            text2: 'Client'
        },{
            number: '23',
            text1: 'Professional',
            text2: 'Photographer'
        },{
            number: '750',
            text1: 'Total',
            text2: 'Event'
        },{
            number: '36',
            text1: 'Total',
            text2: 'Award'
        },
    ]
    return (
        <div className="Client">
            <div className="container">
            {
                intro.map((intro) => (
                <div className="wraper">
                    <h1>{intro.number}</h1>
                    <h4>{intro.text1}</h4>
                    <h5>{intro.text2}</h5>
                </div>
            ))
            }
            </div>
        </div>
    );
};

export default Client;