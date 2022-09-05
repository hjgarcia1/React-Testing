import React from 'react'

function ChildComponents(props) {
    //the greethandler is defined on the parent component with paramater
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponents