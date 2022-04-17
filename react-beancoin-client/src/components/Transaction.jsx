import React from 'react';

function Transaction({ transaction }){
    const {input, output} = transaction;
    const recipients = Object.keys(output);

    return (
        <div className="Transaction">
            <div>
                From: {input ? input.address : 'undefined'}
            </div>
            {
                recipients.map(r =>{
                    return (
                    <div key={r}>
                        To: {r} | Sent: {output[r]}
                    </div>
                    )
                })
            }
        </div>
    )
}


export default Transaction;
