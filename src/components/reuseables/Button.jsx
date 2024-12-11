import React from 'react'

const Button = ({text,style, onclick, content, className, children}) => {
  return (
    <div className='buttons'>
      <button onClick={onclick} style={style}  className={className}><span>{children}</span>{content || text}</button>
    </div>
  )
}

export default Button



