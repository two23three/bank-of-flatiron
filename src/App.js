import React,{useState} from 'react';
import './App.css';
import TransactionList from './components/transactionList';
import TransactionForm from './components/transactionForm';

function App() {
  const [transactions, setTransactions] = useState([])
  
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }
  
  return (
    <div className="ui raised segment">
    <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
       
    </div>
    <TransactionForm onAddTransaction={handleAddTransaction}/>
    <TransactionList transactions={transactions}/>

    </div>
  );
}

export default App;
