import React from 'react'

interface ErrorMessageProps{
    error: string
}

export const ErrorMessage:React.FC<ErrorMessageProps> = ({error}) => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
        <h1 className="text-3xl text-red-600">{error}</h1>
    </div>
  )
}
