import './PurchasesTable.css';
import React from 'react';
import formatDate from '../utils/formatDate';

function PurchaseRow({ purchase }) {
  return (
    <tr>
      <td></td>
      <th>{purchase.name}</th>
      <td>
        <img
          className="purchase-location"
          src={purchase.location}
          alt="purchase location"
          width={50}
          height={50}
        />
      </td>
      <td className="purchase-date">
        <time dateTime={purchase.purchaseDate}>
          {formatDate(purchase.purchaseDate)}
        </time>
      </td>
      <td>
        <div className="category-tag-container">
          <span className={`${purchase.category.toLowerCase()} category-tag`}>
            {purchase.category}
          </span>
        </div>
      </td>
      <td>{purchase.description}</td>
      <th>${purchase.price}</th>
      <td></td>
      <td>
        <button className="purchase-button"></button>
      </td>
    </tr>
  );
}

export default PurchaseRow;
