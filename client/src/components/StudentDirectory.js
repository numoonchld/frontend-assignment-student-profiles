import React, { useEffect, Fragment, useState } from 'react'
import Student from './Student'

const StudentDirectory = () => {

    const [students, setStudents] = useState([])
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    // const [tagSearchTerm, setTagSearchTerm] = useState('')

    const getData = async () => {
        const response = await fetch('https://api.hatchways.io/assessment/students')
        const payload = await response.json()
        console.log(payload)
        setStudents(payload.students)
    }

    useEffect(() => {
        getData()
    }, [])

    const studentsFiltered = students.filter(student => (student.firstName + student.lastName).toLowerCase().includes(nameSearchTerm.toLowerCase()))

    return <Fragment>
        <div className="card my-5 p-3 rounded w-75 mx-auto" id='directory'>
            <input className='p-2 my-1 w-100' type='text' placeholder='Search by name' value={nameSearchTerm} onChange={(event)=>setNameSearchTerm(event.target.value)}/>
            <input className='p-2 my-1 w-100' type='text' placeholder='Search by tag' />
            <ul className="list-group list-group-flush">
                {studentsFiltered.map(student => <li className="list-group-item" key={student.id}> <Student key={student.id} {...student} /> </li>)}
            </ul>
        </div>
    </Fragment>
}

export default StudentDirectory
