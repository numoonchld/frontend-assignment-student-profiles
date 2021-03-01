import React, { Fragment, useState } from 'react'

const Student = ({ firstName, lastName, email, company, skill, pic, grades }) => {

    const addReducer = (arrayToSum) => {
        return arrayToSum.reduce((a, b) => (parseInt(a) + parseInt(b)))
    }

    const [showGrades, setShowGrades] = useState(false)

    return <Fragment>
        <div className='container'>

            <div className="row py-3">
                <div className="col-sm-2 d-flex flex-column justify-content-center ">
                    <img height="100" width='100' className='rounded-circle border border-secondary z-depth-2' src={pic} alt={firstName + ' ' + lastName} />
                </div>
                <div className="col-sm-8">
                    <h3> <b>{firstName.toUpperCase() + ' ' + lastName.toUpperCase()} </b></h3>
                    <hr className='border' />
                    <div className='p-2'>
                        <p>Email: {email}</p>
                        <p>Company: {company}</p>
                        <p>Skill: {skill}</p>
                        <p>Average: {addReducer(grades) / grades.length}%</p>
                    </div>
                    <div className='p-2'>
                        {showGrades 
                        ? 
                        <Fragment>
                            
                            {grades.map((grade,index) => <div> Test {index+1}:&emsp;{grade}% </div>)}
                            
                        </Fragment>
                        : 
                        null}
                    </div>

                </div>
                <div className="col-sm-1 py-3 d-flex flex-column justify-content-start">
                    {showGrades ? <a><i className="fas fa-minus fa-3x" onClick={() => setShowGrades(false)} ></i></a> : <i className="fas fa-plus fa-3x" onClick={() => setShowGrades(true)}></i>}
                </div>
            </div>
        </div>
    </Fragment>
}

export default Student
