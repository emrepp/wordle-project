# Wordle Dordle Bordle 

This project is a variation on the standard [Wordle](https://www.nytimes.com/games/wordle/index.html) that you can play endlessly, but also add your own words to the database. 

![lbF1CJ](https://i.makeagif.com/media/10-21-2022/lbF1CJ.gif)

## About

The game itself takes in a guess when enter is clicked and 5 letters fill a row on a grid, the guess is checked against the word pulled from the local db.json file when the page loaded. Letters that are correct and in the right space turn green, correct but in the wrong space turn yellow, and the rest are gray.

When you have made 6 total guesses, if you have not found the correct word, the game is over and you must reload to play another. A modal will let you know. If you have found the correct word, the word will have all green letters, and similarly a modal will let you know.

The db.json file contains all 5 letter strings. Each square that contains a previous guess is an object that contains a letter and color, each object is checked against the solution string to determine the color until all letters match the solution or you have run out.

You have the option to add new 5 letter words to the database, or remove them.


