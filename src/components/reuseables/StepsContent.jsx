import React from 'react'

const StepsContent = ({children, className,text}) => {
  return (
    <div>
      <p className={className} >{text} {children}</p>
    </div>
  )
}

export default StepsContent
