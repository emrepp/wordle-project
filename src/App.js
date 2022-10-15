import { useEffect, useState } from "react";



function App() {

  const[solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      
      const randomWord = json[Math.floor(Math.random()*json.length)]
      setSolution(randomWord.word)
    })
  }, [setSolution])

  return (
    <div className="App">
    
       <h1>Wordle Dordle</h1>
      { solution && <div>Solution is: {solution} </div>}
    </div>
  );
}

export default App;


/* data: solution (data that contains words that are all 5 letter strings - or more letters for the challenging option), 
previous guesses (an array of arrays of letter objects), each object is a letter/color in the guess word,
current string being guessed
letters on the keypad (array of letter objects that include color options)
number of turns

game: enter words
user enters letter, square holds the letter
letters can be deleted
submit submits the word on the row
if the squares are not filled - error
if word has already been used - error

each letter is checkwed to see if it matches the solution(location in word and if the letter is used at all)

correct letter and position is green
correct letter, wrong position is yellow
non-match stay plain

guess stays on grid with colors

moves to next row for next guess

letters below change colors with every word submit

when the word matches the solution, send a modal or something

when user runs out of guesses, a different modal


need about page and option for a separate page with more letters (possibly) (router) */




