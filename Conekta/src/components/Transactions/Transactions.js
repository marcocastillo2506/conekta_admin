import React, { Component } from 'react';
import Table from './Table';
import Scroll from './Scroll';
import {data} from '../../../dataObject';

class Invoice extends Component {
	constructor() {
		super()
		this.state = {
			paymentsArray: data.data.payments,
		}
	}

    // componentDidMount() {
    //     fetch()
    //     .then();
    // }

	render() {
        const { paymentsArray } = this.state;
		return !paymentsArray.length ?
		<h1>Loading payments...</h1> :
		    (
                <div>
                    <h1>Payments</h1>
                    <Scroll>
                        <Table
                            arr={ paymentsArray }
                        />
                    </Scroll>
                </div>
            )
        }
}

export default Invoice;
