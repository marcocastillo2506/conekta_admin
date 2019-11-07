import React from 'react';
import Row from './Row';
import './table.css';

const Table = ({ arr }) => {
	return(
		<table>
            <tr>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Payment Type</th>
                <th>Customer</th>
                <th>Amount</th>
            </tr>
            {
                arr.map((currentObj) => {
                    return (
                        <Row
                        key={currentObj.id}

                        date = {currentObj.created}

                        paymentStatus = {currentObj.status}

                        paymentType = {currentObj.type}
                        brand = {currentObj.brand}

                        customer={currentObj.customer.name}
                        email={currentObj.customer.email}

                        amount={currentObj.amount}
                        />
                    );
                })
            }
		</table>
	);
}

export default Table;
