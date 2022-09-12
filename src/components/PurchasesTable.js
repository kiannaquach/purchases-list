import './PurchasesTable.css';
import React from 'react';
import PurchaseRow from './PurchaseRow';

function PurchasesTable({ purchases }) {
  return (
    <div>
      <table className="purchases-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Location</th>
            <th className="purchase-date">Purchase Date</th>
            <th className="category-tag-title">Category</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase, idx) => (
            <PurchaseRow purchase={purchase} key={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PurchasesTable;
