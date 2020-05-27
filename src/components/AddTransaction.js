import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import styled from 'styled-components'

const FormLabel = styled.label`
  display: inline-block;
  margin: 10px 0;
`

const FormInput = styled.input`
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`
const Button = styled.button`
  cursor: pointer;
  box-shadow: var(--box-shadow);
  
  border: 0;
  display: inline-block;
  font-size: 16px;
  margin: 10px 10px;
  padding: 10px;
  width: 155px;

  :focus {
    outline: 0;
  }

  &.add {
    background-color: #9c88ff;
    color: #fff;
  }

  &.clear {
    background-color: #fff;
    color: #9c88ff;
  }
`

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(null)
  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    if (text === '') {
      setError("Transaction name cannot be empty!")
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addTransaction(newTransaction)
      clearEntry()
    } 
  }

  const clearEntry = () => {
    setText('')
    setAmount(0)
    setError(null)
  }

  return (
    <> 
      <h3>Add new transaction</h3>
      <div>
        <div className="form-control">
          <FormLabel htmlFor="text">Name</FormLabel>
          <FormInput type="text" value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..." />
          {error != '' && <span style={{color: "red"}}>{error}</span>}
        </div>
        <div className="form-control">
          <FormLabel htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)
          </FormLabel>
          <FormInput type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." />
        </div>
        <Button className="add" onClick={onSubmit}>Add</Button>
        <Button className="clear" onClick={clearEntry}>Clear</Button>
      </div>
    </>
  )
}
