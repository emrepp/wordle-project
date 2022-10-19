import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function AddWord() {
  const [word, setword] = useState('');
  //onst [show, setShow] = useState(false);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    //const input = {word};

  console.log(word)
   
  }

 



  return (

        <div className="addwords">  
            <h2>Add five letter words to the Wordle Dordle database:</h2>
        
        <br>
        </br>
    
    <form onSubmit= {handleSubmit}>
      <label>Enter your word:</label>
        <input
          type="text" 
          required
          value={word}
          onChange={(e) => setword(e.target.value)}
        />
      
      <br>
      </br>
     
      <button>Submit</button>
    </form>
    
    </div>
  ) }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AddWord />);
