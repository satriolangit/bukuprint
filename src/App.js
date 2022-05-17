import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './style.css';
import Invoice from './Invoice';

export default function App() {
  const invoiceRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => invoiceRef.current}
      />
      <Invoice ref={invoiceRef} />
    </div>
  );
}
