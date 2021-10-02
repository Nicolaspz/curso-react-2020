import React, { useState } from 'react'
import Combobox from './exemplos/combobox';


function App() {

  const [nome, setNome]=useState("")
  
  
  
  

  return (
    <div className="App">
      <input type="text" value={nome} onChange={e=>setNome(e.target.value)} />
   <h1>Hello  {nome}</h1>
   <Combobox></Combobox>
  
   
    </div>
  );
}

export default App;
