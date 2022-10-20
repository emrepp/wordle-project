import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom';

export default function AddWord() {
  const [word, setword] = useState('');
  //onst [show, setShow] = useState(false);
  //const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = {word};

    //setIsPending(true);

  fetch('http://localhost:3001/solutions', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(input),

  }).then(() => {
    console.log('new word added')
    //setIsPending(false);
  })

  navigate('/wordadded');
  
}
  
  

   
  

 



  return (

        <div className="addwords">  
            <div>Add five letter words to the Wordle Dordle database:</div>
        
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
     
     {<button>Submit</button>} 
    
    </form>
    
    </div>
  ) }

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AddWord />);
