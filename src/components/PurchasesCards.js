import './PurchasesCards.css';
import React from 'react';
import formatDate from '../utils/formatDate';

function PurchasesCards({ purchases }) {
  return (
    <div>
      {purchases.map((purchase, idx) => (
        <div key={idx} className="purchase-card">
          <div className="purchase-card-col-1">
            <div className="purchase-card-location-name">
              <img
                className="purchase-location"
                src={purchase.location}
                alt="purchase location"
                width={50}
                height={50}
              />
              <span className="bold">{purchase.name}</span>
            </div>
            <p>{purchase.description}</p>
            <h4>Purchase Date</h4>
            <time dateTime={purchase.purchaseDate}>
              {formatDate(purchase.purchaseDate)}
            </time>
          </div>

          <div className="price bold">
            <div>${purchase.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PurchasesCards;
