import React from 'react'
export default function WordAdded( ) {
  
    function refreshPage() {
        window.location.reload(false);
      }


    return (
      <div>{refreshPage}</div>
      
    )
}