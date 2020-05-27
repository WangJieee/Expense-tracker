import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
`
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <>
     <h3>History</h3>
      <List>
        {transactions.map(transaction => 
          <Transaction key={transaction.id} transaction={transaction} />
        )}
        
      </List>   
    </>
  )
}
