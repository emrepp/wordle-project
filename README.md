# 

# Wordle Dordle Bordle 

This React project is a variation on the standard [Wordle](https://www.nytimes.com/games/wordle/index.html) that can be played endlessly.
<br>
It was was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![lbF1CJ](https://i.makeagif.com/media/10-21-2022/lbF1CJ.gif)

Through the app, the user can also add 5 letter words to be used as potential solutions to the db.json file, as well as delete and view the words. 

## Installation:
Download this entire git repository to your computer and place in your desired install directory. If you do not currently have Node Package Manager (NPM), you'll need to install. You can follow their guide here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Navigate to wordle-project, run ```npm install```, and ```json-server --watch data/db.json --port 3001``` to access the json server. 


Check to make sure it is running by viewing localhost:3001/solutions in your browser.

Run npm start to view the app in your browser.

App is deployed [here](emrepp.github.io/wordle-project).

## About:

The game itself takes in a guess when enter is clicked and 5 letters fill a row on a grid, the guess is checked against the word pulled from the local db.json file when the page loaded. Letters that are correct and in the right space turn green, correct but in the wrong space turn yellow, and the rest are gray.


When you have made 6 total guesses, if you have not found the correct word, the game is over and you must reload to play another. A modal will let you know. If you have found the correct word, the word will have all green letters, and similarly a modal will let you know.

The db.json file contains all 5 letter strings. Each square that contains a previous guess is an object that contains a letter and color, each object is checked against the solution string to determine the color until all letters match the solution or you have run out.


