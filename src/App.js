import './App.css';
import React, { useState, useEffect } from 'react';
import PurchasesTable from './components/PurchasesTable';
import PurchasesCards from './components/PurchasesCards';

/* 
Future User Improvements:
- Add pagination to the table so that we only see 10 purchases
- Allow user to filter by category
- Allow user to sort by name, purchase date, category, or price

Future Developement Improvements:
- Add tests for each component
*/

function App() {
  const [purchases, setPurchases] = useState([]);
  const [isLoadingPurchases, setIsLoadingPurchases] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = () => {
      window.addEventListener('resize', checkScreenSize);

      return () => {
        window.removeEventListener('resize');
      };
    };

    const getPurchases = () => {
      fetch('https://idme-interview.herokuapp.com/')
        .then((res) => res.json())
        .then((response) => {
          setPurchases(response);
          setIsLoadingPurchases(false);
        })
        .catch((error) => console.error(error));
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    getPurchases();
    checkScreenSize();
    isMobileDevice();
  }, []);

  // I originally created this to see all the categories associated
  // with each purchase. I am keeping this here to show my logic.
  // const getCategories = (response) => {
  //   const obj = {};

  //   for (let i = 0; i < response.length; i++) {
  //     const item = response[i];

  //     if (obj.hasOwnProperty(item.category)) {
  //       obj[item.category].push(item)
  //     } else {
  //       obj[item.category] = [];
  //     }
  //   }

  //   return obj;
  // }

  return (
    <div className={isMobile ? 'mobile-wrapper' : 'wrapper'}>
      <header>
        <h1 className={isMobile ? 'mobile-header' : 'desktop-header'}>
          Purchases
        </h1>
      </header>

      {isLoadingPurchases && <div>Loading...</div>}
      {isMobile && !isLoadingPurchases && (
        <PurchasesCards purchases={purchases} />
      )}
      {!isMobile && !isLoadingPurchases && (
        <PurchasesTable purchases={purchases} />
      )}

      <footer></footer>
    </div>
  );
}

export default App;
