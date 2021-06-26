import React from 'react'

function InternalReviews() {
    return (
        <div>
            <table className='styledTable'>
                <thead>
                    <tr>
                        <td>Name</td><td>Entity</td><td>Location</td><td>Expertise</td><td>Date</td>
                    </tr>
                    <tr>
                        <td colSpan={5} className='styledHr'>
                            <hr></hr>
                        </td>
                    </tr>
                </thead>
                <tr>
                    <td>Operation Ti</td><td>Renault Co.</td><td>France</td><td>#Tax</td><td>20/01/2018</td>
                </tr>
                <tr>
                    <td>Op. Prometh</td><td>Renault HQ</td><td>USA</td><td>#MA</td><td>18/02/2019</td>
                </tr>
                <tr>
                    <td>Op. Latandre</td><td>Renault Br</td><td>Italy</td><td>#Social</td><td>18/02/2019</td>
                </tr>

            </table>
            <div style={{textAlign:'right', marginTop:'5px'}}>See more reviews</div>
            
        </div>
    )
}

export default InternalReviews
