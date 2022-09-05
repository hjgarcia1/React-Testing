import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('functional click handler')
    }

    return (
        <div><button onClick={clickHandler}>Function Component Click</button></div>
    )
}

export default FunctionClick