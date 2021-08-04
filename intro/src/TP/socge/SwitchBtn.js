import { useState } from "react";

export function SwitchBtn() {

  const [on, setOn] = useState(false);

  function onClick() {
    setOn(!on);
  }

  return(
    <button
      onClick={onClick} 
      className="btnSwitch"
      style={{ 
        backgroundColor: on ? '#8CDBAD' : '#ccc',
        color: on ? 'white' : 'black'
      }}>
      { on ? 'oui' : 'non' }
    </button>
  )
}