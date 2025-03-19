import React from 'react'
import { useState } from 'react';
export const useCounter = (initialValue) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = (value) => {
    setCounter(counter + value);
  };
  const decrement = (value,negative) => {
    if (!negative && counter - value <1) {
      setCounter(0)
      return
    }
    setCounter(counter-value)
  };
  const reset = () => {
    setCounter(0)
  };
  return {
    counter,
    increment,
    decrement,
    reset
  }
}
