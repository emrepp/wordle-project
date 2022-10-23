

import React, {useState, useEffect} from 'react'
import WordList from "./WordList"



export default function WordData() {

    const[datas, setDatas] = useState(null);


    useEffect(() => {
        fetch('http://localhost:3001/solutions')
        .then(res =>{
            return res.json();
        })
        .then((data => {
            console.log(data);
            setDatas(data)
        }))
    }, []);

  
    const handleDelete = (id) => {
        const newWords = datas.filter(word => word.id !== id);
        setDatas(newWords);

        fetch(`http://localhost:3001/solutions/${id}`, {
            method: 'DELETE'
         }).then(() => { console.log(datas)

        })
    }
    return (
        
 <div>
    {datas && <WordList datas={datas} handleDelete={handleDelete}/>}
 </div>
    );
    }