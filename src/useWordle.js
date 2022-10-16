import {useState} from 'react'

const useWordle = (solution) => {
const [turn, setTurn] = useState (0) //after 6 guesses game over
const [currentGuess, setCurrentGuess] = useState('') 
const [guesses, setGuesses] = useState([...Array(6)]) 
const [history, setHistory] = useState([]) //strings to avoid duplicate words
const [isCorrect, setIsCorrect] = useState(false)
    // get guess into array of obj


    const formatGuess = () => {
      let solutionArray = [...solution]
      let formattedGuess = [...currentGuess].map((l) => {
        return {key: l, color: 'grey'} 

    })   

formattedGuess.forEach((l, i) => {
    if (solution[i] === l.key){
        formattedGuess[i].color = 'green'
        solutionArray[i] = null

    }
})

formattedGuess.forEach((l,i) => {
    if (solutionArray.includes(l.key) && l.color !=='green') {
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null
    }
})
return formattedGuess
    }

    //add new to guess state
    //update isCorrect if correct
    //add one to the turn state
    
const addNewGuess = (formattedGuess) =>  {
    if (currentGuess === solution) {
      setIsCorrect(true)  

    }
    setGuesses((prevGuesses) => {
        let newGuesses = [...prevGuesses]
        newGuesses[turn] = formattedGuess
        return newGuesses
    })
    setHistory((prevHistory) => {
        return [...prevHistory, currentGuess]

    })
    setTurn((prevTurn) => {
        return prevTurn + 1
    })
    setCurrentGuess('')
}
 //handle keyup & track
 //on enter, add new guess
const handleKeyup = ({key}) => {
    if (key === 'Enter') {

    if (turn > 5) {
    return

    }
    if (history.includes(currentGuess)) {
    return

    }

    if (currentGuess.length !==5){
    return
    }
const formatted = formatGuess()
addNewGuess(formatted)
    }
    if (key === 'Backspace'){
        setCurrentGuess((prev) => prev.slice(0, -1))
          return

        }
   
    

    //regex that I barely understand to make sure only letter keys count
    if (/^[A-Za-z]$/.test(key)) {
        if (currentGuess.length < 5) {
            setCurrentGuess(prev => prev + key)
            }
        }

    } 
    


return{turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle