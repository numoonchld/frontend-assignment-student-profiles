import React, { useEffect, Fragment, useState } from 'react'
import Student from './Student'

const StudentDirectory = () => {

    const [students, setStudents] = useState([])

    const getData = async () => {
        const response = await fetch('https://api.hatchways.io/assessment/students')
        const payload = await response.json()
        console.log(payload)
        setStudents(payload.students)
    }

    useEffect(() => {
        getData()
    }, [])

    return <Fragment>
        <div className="card my-5 rounded w-75 mx-auto" id='directory'>
            <ul className="list-group list-group-flush">
                {students.map(student => <li className="list-group-item" key={student.id}> <Student key={student.id} {...student} /> </li>)}
            </ul>
        </div>
    </Fragment>
}

export default StudentDirectory
