import React from 'react'

const Button = ({text,style, onclick, content, className}) => {
  return (
    <div className='buttons'>
      <button onClick={onclick} style={style}  className={className}>{content || text}</button>
    </div>
  )
}

export default Button



