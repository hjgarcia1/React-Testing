import React from 'react'

//props are destructred
const Greet = ({ name, heroName }) => {

    //the code below can also work if the props are not destructed at the function level
    // const {name, heroName} = props

    return (
        <div>Hello {name} a.k.a {heroName}</div>
    )
}

export default Greet