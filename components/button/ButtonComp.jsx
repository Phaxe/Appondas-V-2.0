import React from 'react'

const ButtonComp = ({text,backgroundColors, color}) => {
  return (
    <button className={`text-${color}-500 bg-${backgroundColors}-500 px-5 py-5 `}>
        {text}
    </button>
  )
}

export default ButtonComp