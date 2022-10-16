import React, { useEffect } from 'react'
import useWordle from './useWordle'

export default function Wordle({solution}) {
    const { currentGuess, guesses, isCorrect, turn, handleKeyup } = useWordle(solution)

    useEffect(() => {
     window.addEventListener('keyup', handleKeyup)  
     
     return () => window.removeEventListener('keyup', handleKeyup)
     
    }, [handleKeyup])

    useEffect(() => {
      console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])
  return (
    <div>
    <div>solution - {solution} </div>
    <div>current guess - {currentGuess}</div>
    </div>
  )
}


