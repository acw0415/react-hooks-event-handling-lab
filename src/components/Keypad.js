import React from "react";

function Keypad() {

    function changeThing() { console.log("Entering password...") }

    return (
        <input type="password" onChange={changeThing} />
    )
}

export default Keypad;