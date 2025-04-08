import React from 'react'

interface IButtonProps {
    value:number;
    value2?:number 
}

const Button = ({value,value2}:IButtonProps) => {
  return (
    <div>{value} - {value2}</div>
  )
}

export default Button