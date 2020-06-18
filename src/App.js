import React from 'react';
import './App.css';
import Header from './componants/Header.js';
import Balance from './componants/Balance';
import IncomeExpence from './componants/IncomeExpence';
import TransactionList from './componants/TransactionList';
import AddTransaction from './componants/AddTransaction';

function App() {
  return (
     <>
     <div>
   <Header/>
  <div className="container">

    <Balance/> 
    <IncomeExpence/>
    <TransactionList/>
    <AddTransaction/>
  </div>
   </div>
     </>
  );
}

export default App;
