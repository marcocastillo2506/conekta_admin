import React from 'react';

const Row = ({ date, paymentStatus, paymentType, brand, customer, email, amount }) => {
	return (
		<tr>
                  <td>{date}</td>

                  <td>{paymentStatus}</td>
									<td>

                  <td>{paymentType}</td>
                  <td>{brand}</td>
									</td>

									<td>
                  <td>{customer}</td>
                  <td>{email}</td>
									</td>

                  <td>{amount}</td>
		</tr>
	);
}

export default Row;
