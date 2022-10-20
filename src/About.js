
import React from 'react'
export default function About() {
    const styles = {
        display: "inline-block",
        width: "500px",
        padding: "12px",
        margin: "0 10px 10px",
        background: "#8f7839",
        textDecoration: "none",
        color: "white",
        
      };
  
    return (
      <div style = {styles}>
        
            To play, add 5 letter words to the grid one at a time and click enter. 
            When a letter is matches the solution word and is in the right place, it will be green.
            When a letter matches the solution, but is not in the right place, it will be yellow.
            When you have found the correct word, the word will be green.
       
      </div>
    )
}