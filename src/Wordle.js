import React, { useEffect, useState } from 'react'
import useWordle from './useWordle'
import Grid from './Grid'
import Modal from './Modal'

export default function Wordle({solution}) {
    const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
     window.addEventListener('keyup', handleKeyup)  

     if (isCorrect) {
      console.log('won')
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
     }

     if (turn >5){
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)

     }
     
     return () => window.removeEventListener('keyup', handleKeyup)
     
    }, [handleKeyup, isCorrect])

   
  return (
    <div>
    <div>solution - {solution}</div>
    <div>current guess - {currentGuess}</div>
    <Grid guesses={guesses} currentGuess={currentGuess}  turn={turn}/>
    {showModal && <Modal isCorrect={isCorrect} turn={turn} solution= {solution} />}
    </div>
  )
}



