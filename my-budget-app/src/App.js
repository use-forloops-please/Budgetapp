import React from 'react';
import Balance from './components/balance';
import IncomeList from './components/incomeList';
import ExpenseList from './components/ExpenseList';
import AddTransaction from './components/AddTransaction';
import Register from './components/Register';
import Login from './components/Login';
import Savings from './components/Savings'
import './Assets/Styles/styles.css';
import SideBar from './components/SideBar';
import FuturePlanning from './components/FuturePlanning';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Budget App</h1>
          <div className="profile-icon">LJ</div>
        </header>
        <div className="App-body">
          <SideBar />
          <div className="Content">
            <Routes>
              <Route path="/savings" component={Savings} />
              <Route path="/transactions" component={AddTransaction} />
              <Route path="/income-list" component={IncomeList} />
              <Route path="/future-planning" component={FuturePlanning} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
