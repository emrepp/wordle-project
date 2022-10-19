import React,{useState, useEffect} from 'react';
import './App.css';

const [words,setWords]=useState([]);
export default function WordData() {
  
  const getData=()=>{
    fetch('http://localhost:3001/solutions'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setWords(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="worddata">
     {words &&
    words.map((wordOne) => (
      <div className="item-container">
        Id:{wordOne.word} <div className="title">Word:{wordOne.word}</div>
      </div>
   ))}
    </div>
  );
}

e