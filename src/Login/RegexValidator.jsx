
import React from 'react'

export const emailValidator = email => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

export const passwordValidator = password => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,12}$/;
    return passwordRegex.test(password);
}

function RegexValidator() {


  return (
    <div>RegexValidator</div>
  )
}

export default RegexValidator