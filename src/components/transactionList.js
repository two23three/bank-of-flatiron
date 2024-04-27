import React, { useState } from 'react';
import transactionData from '../transactionData/transactionData';
//function to display transaction data

function TransactionList({transactions}){
    const allTransactions =[...transactionData, ...transactions]
    //create state to hold search term
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
  };

  // Filter transactions based on the search term
  const filteredTransactions = allTransactions.filter((transaction) =>
      transaction.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );

    
    
    return(
       
       
       <div id='tablediv'>
         <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
        <table id='table'>
          <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            
          </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index)=>(
             <tr key={index}>
                <td>{transaction.Date}</td>
                <td>{transaction.Description}</td>
                <td>{transaction.Category}</td>
                <td>{transaction.Amount}</td>
             </tr>

            ))}


          </tbody>

        </table>
        </div>
    )

 
}
export default TransactionList;