import React, { Fragment } from 'react'

const Student = ({ firstName, lastName, email, company, skill, pic, grades }) => {

    const addReducer = (arrayToSum) => {
        return arrayToSum.reduce((a,b)=>(parseInt(a)+parseInt(b)))
    }

    return <Fragment>
        <div className='container'>

            <div className="row p-3">
                <div className="col-sm-2 d-flex flex-column justify-content-center ">
                    <img height="100" width='100' className='rounded-circle border border-secondary z-depth-2' src={pic} alt={firstName + ' ' + lastName} />
                </div>
                <div className="col-sm-9 ">
                    <h3> <b>{firstName.toUpperCase() + ' ' + lastName.toUpperCase()} </b></h3>
                    <hr className='border' />
                    <div className='p-2'>
                        <p>Email: {email}</p>
                        <p>Company: {company}</p>
                        <p>Skill: {skill}</p>
                        <p>Average: {addReducer(grades)/grades.length}%</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Student
