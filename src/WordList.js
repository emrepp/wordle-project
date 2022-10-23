import React from "react"

export default function WordList ({datas,handleDelete} ) {

return(


<div className= "word-list">
        
{datas.map((words)=> (
       <div key= {words.id}>
       <p>{words.word}</p>
       <button onClick={() => handleDelete(words.id)}>Delete</button>
</div>
   ))}
</div>
);
};