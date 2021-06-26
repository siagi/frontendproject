import React from 'react'

function AmountOfFees() {
    return (
        <div>
            <table className='styledTable'>
                <thead>
                    <tr>
                        <td>Year</td><td>Cost center</td><td>Total amount</td><td>Law firm</td>
                    </tr>
                    <tr>
                        <td colSpan={5} className='styledHr'>
                            <hr></hr>
                        </td>
                    </tr>
                </thead>
                <tr>
                    <td>2019</td><td>CS 153</td><td>3 500&euro;</td><td>Clifford chance</td>
                </tr>
                <tr>
                    <td>2018</td><td>CS 153</td><td>9 500&euro;</td><td>Linklaters</td>
                </tr>
                <tr>
                    <td>2017</td><td>CS 47</td><td>10 500&euro;</td><td>Linklaters</td>
                </tr>

            </table>
            
        </div>
    )
}

export default AmountOfFees
