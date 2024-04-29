import React, { useState } from "react";

function TransactionForm({onAddTransaction}) {
   
   
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            Date: date,
            Description: description,
            Category: category,
            Amount: parseFloat(amount)
        };

    onAddTransaction(newTransaction)
    setDescription('')
    setCategory('')
    setAmount('')
    setDate('')
    }
    
  return (
    <form onSubmit={handleSubmit} id="form">
     <label>
             Date:
             <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
     </label>
      
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;