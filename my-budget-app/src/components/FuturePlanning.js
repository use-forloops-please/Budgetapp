import React, { useState } from 'react';

const FuturePlanning = () => {
    const [goals, setGoals] = useState([]);
    const [goal, setGoal] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const addGoal = () => {
        const newGoal = { goal, amount, date };
        setGoals([...goals, newGoal]);
        setGoal('');
        setAmount('');
        setDate('');
    };

    const calculateTimeUntilPurchase = (date) => {
        const currentDate = new Date();
        const purchaseDate = new Date(date);
        const timeDiff = purchaseDate - currentDate;
        const daysUntilPurchase = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return daysUntilPurchase > 0 ? daysUntilPurchase : 0;
    };

    return (
        <div className="future-planning">
            <h2>Future Planning</h2>
            <input
                type="text"
                placeholder="What are you saving for?"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount needed"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={addGoal}>Add Goal</button>
            <ul>
                {goals.map((g, index) => (
                    <li key={index}>
                        {g.goal} - ${g.amount} by {new Date(g.date).toLocaleDateString()} ({calculateTimeUntilPurchase(g.date)} days left)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FuturePlanning;
