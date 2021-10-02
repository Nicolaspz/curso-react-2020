import React from "react";

function Combobox() {

  
    
    const opcoes=["fulano","cicrano"]
    const comOpc=opcoes.map(op=> <option>{op}</option> )
    
    
  
    return (
      <>
<select name="" id="">
    {comOpc}
</select>

      </>
    );
  }
  
  export default Combobox;
  