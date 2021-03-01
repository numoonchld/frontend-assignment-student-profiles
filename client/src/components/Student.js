import React, { Fragment, useState } from 'react'

const Student = ({ firstName, lastName, email, company, skill, pic, grades, tagSearchTerm }) => {

    const addReducer = (arrayToSum) => {
        return arrayToSum.reduce((a, b) => (parseInt(a) + parseInt(b)))
    }

    const [showGrades, setShowGrades] = useState(false)
    const [newTag, setNewTag] = useState('')
    const [tags, setTags] = useState([])


    if (tagSearchTerm === '') {

        return <Fragment>
            <div className='container'>
                <div className="row py-3">
                    <div className="col-sm-2 d-flex flex-column justify-content-center ">
                        <img height="100" width='100' className='rounded-circle border border-secondary z-depth-2' src={pic} alt={firstName + ' ' + lastName} />
                    </div>
                    <div className="col-sm-8 pt-3">
                        <h3> <b>{firstName.toUpperCase() + ' ' + lastName.toUpperCase()} </b></h3>
                        <hr className='border' />
                        <div className='p-2'>
                            <p>Email: {email}</p>
                            <p>Company: {company}</p>
                            <p>Skill: {skill}</p>
                            <p>Average: {addReducer(grades) / grades.length}%</p>
                            {tags ?
                                tags.map(tag => <span class="badge badge-secondary m-1 p-2">{tag}</span>)
                                : null}
                        </div>
                        <div className='p-2'>
                            {showGrades
                                ?
                                <Fragment>

                                    {grades.map((grade, index) => <div> Test {index + 1}:&emsp;{grade}% </div>)}

                                </Fragment>
                                :
                                null}
                        </div>

                        <input
                            className='p-2 form-control'
                            type='text'
                            placeholder='Add a tag (hit enter to create)'
                            value={newTag}
                            onChange={event => setNewTag(event.target.value)}
                            onKeyDown={event => event.keyCode === 13 ? (setTags([...tags, event.target.value]), setNewTag('')) : null}
                        />

                    </div>
                    <div className="col-sm-1 py-3 d-flex flex-column justify-content-start">
                        {showGrades ? <a><i className="fas fa-minus fa-3x" onClick={() => setShowGrades(false)} ></i></a> : <i className="fas fa-plus fa-3x" onClick={() => setShowGrades(true)}></i>}
                    </div>
                </div>
            </div>
        </Fragment>

    } else {

        const matchingTags = tags.filter(tag => tag.includes(tagSearchTerm))

        if (matchingTags.length > 0) {
            return <Fragment>
                <div className='container'>
                    <div className="row py-3">
                        <div className="col-sm-2 d-flex flex-column justify-content-center ">
                            <img height="100" width='100' className='rounded-circle border border-secondary z-depth-2' src={pic} alt={firstName + ' ' + lastName} />
                        </div>
                        <div className="col-sm-8 pt-3">
                            <h3> <b>{firstName.toUpperCase() + ' ' + lastName.toUpperCase()} </b></h3>
                            <hr className='border' />
                            <div className='p-2'>
                                <p>Email: {email}</p>
                                <p>Company: {company}</p>
                                <p>Skill: {skill}</p>
                                <p>Average: {addReducer(grades) / grades.length}%</p>
                                {tags ?
                                    tags.map(tag => <span class="badge badge-secondary m-1 p-2">{tag}</span>)
                                    : null}
                            </div>
                            <div className='p-2'>
                                {showGrades
                                    ?
                                    <Fragment>

                                        {grades.map((grade, index) => <div> Test {index + 1}:&emsp;{grade}% </div>)}

                                    </Fragment>
                                    :
                                    null}
                            </div>

                            <input
                                className='p-2 form-control'
                                type='text'
                                placeholder='Add a tag (hit enter to create)'
                                value={newTag}
                                onChange={event => setNewTag(event.target.value)}
                                onKeyDown={event => event.keyCode === 13 ? (setTags([...tags, event.target.value]), setNewTag('')) : null}
                            />

                        </div>
                        <div className="col-sm-1 py-3 d-flex flex-column justify-content-start">
                            {showGrades ? <a><i className="fas fa-minus fa-3x" onClick={() => setShowGrades(false)} ></i></a> : <i className="fas fa-plus fa-3x" onClick={() => setShowGrades(true)}></i>}
                        </div>
                    </div>
                </div>
            </Fragment>
        }
        else {
            return null
        }

    }




}

export default Student
