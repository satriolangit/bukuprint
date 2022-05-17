import React, { Component } from 'react';

class Invoice extends Component {
  render() {
    return (
      <div>
        <h4>Invoice</h4>
        <p>Ayam goreng : Rp. 15.000</p>
        <p>Nasi Putih : Rp. 5.000</p>
        <p>Teh Manis : Rp. 2.000</p>
        <p>Total : Rp. 22.000</p>
      </div>
    );
  }
}

export default Invoice;
