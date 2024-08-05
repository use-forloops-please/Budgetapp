import React, { useState } from 'react';
import { addTransaction } from '../Services/FirebaseService';

function AddTransactionModal() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = { text, amount: parseFloat(amount) };
        await addTransaction(transaction);
        setText('');
        setAmount('');
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <label>Text</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <label>Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransactionModal;
