import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import './App.css';
import styled from 'styled-components'
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState'

const Wrapper = styled.div`
  margin: 30px auto;
  width: 350px;
`
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Wrapper>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Wrapper>
    </GlobalProvider>
  );
}

export default App;
