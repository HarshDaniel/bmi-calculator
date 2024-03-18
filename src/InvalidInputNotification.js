import React from 'react'

const InvalidInputNotification = ({message}) => {
  return (
    <div className='invalid-input-notification'>
        {message}
    </div>
  )
}

export default InvalidInputNotification