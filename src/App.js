import { useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Wordle from './Wordle'
import Header from "./Header";
import AddWord from "./AddWord";
import About from "./About"

import WordData from "./WordData"





function App() {

  function refreshPage() {
    window.location.reload(false);
  }

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
      <div><h1>Wordle Dordle</h1></div>
     
      <BrowserRouter>
      <div >
        <Header />
        
        <Routes>
          <Route path="/" element={<useWordle/>} />
          <Route path="/addWord" element={<AddWord />} />
          <Route path="/about" element={<About />} />
          <Route path="/worddata" element={<WordData/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
    
     
    <div>
      { solution ? <Wordle solution = {solution} />: null}
    </div>

    <div>
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
   
   
</div>



  );
}

export default App;


