import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  > div {
    flex: 1;
    text-align: center;
  }

  > div:first-of-type {
    border-right: 1px solid #dedede;
  }

  .money {
    font-size: 20px;
    letter-spacing: 1px;
    margin: 5px 0;
  }
  
  .money.plus {
    color: #2ecc71;
  }
  
  .money.minus {
    color: #c0392b;
  }

`

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <Wrapper>
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </Wrapper>
  )
}
