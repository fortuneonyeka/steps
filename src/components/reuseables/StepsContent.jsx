import React from 'react'

const StepsContent = ({children, className,text, rangeCount, days,count}) => {
  return (
    <div>
      <p className={className} >{rangeCount} {count} {days} {text}  {children}</p>
    </div>
  )
}

export default StepsContent
