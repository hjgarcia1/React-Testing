import React from 'react'
import Person from './Person'

function Loops() {
    const people = [
        {
            id: 1,
            name: 'John',
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Jane',
            skill: 'React'
        },
        {
            id: 3,
            name: 'Mike',
            skill: 'Vue'
        }
    ]
    const personLists = people.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {personLists}
        </div>
    )
}

export default Loops