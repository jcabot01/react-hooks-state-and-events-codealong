import React, { useState } from "react";




function Toggle() {
  const [isOn, setIsOn ] = useState(false) //start with false
  
  function handleClick() {
    setIsOn((isOn) => !isOn); //initial state of isOn is "off", so click would reset state of "off" to "on".  Or isOn to !isOn (boolean).  This is a function, returns !isOn
  }

  const color = isOn ? "red" : "white"

  return (
      <button style={{ background: color }} onClick={handleClick}> {/*reusing to isOn state, and conditionally rendering*/}
        {isOn ? "ON" : "OFF"}
      </button>
  );
}

export default Toggle;
