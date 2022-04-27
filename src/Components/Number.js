import React, {useState, useEffect } from 'react'

const Number = ({num, onSelect, selected}) => {
    
    const selectRating = () => {
        onSelect(num)
            
    }
  return (
    <span onClick={selectRating} className={`rating ${selected===num ? 'selected' : ''}`}>{num}</span>
  )
}

export default Number