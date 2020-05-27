import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import styled from 'styled-components'

const Record = styled.li`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  
  &.plus {
    border-right: 5px solid #2ecc71;
  }
  
  &.minus {
    border-right: 5px solid #c0392b;
  }

  .delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .delete-btn:focus {
    outline: 0;
  }

  :hover .delete-btn {
    opacity: 1;
  }
`

export const Transaction = (props) => {
  const {transaction} = props
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <Record className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} 
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </Record>
  )
}
