import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function HowUnderstanding () {
    const history=useHistory();
    const handleSubmit = () => {
        history.push('/supported')
    }
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <section id='understandingSubmit'>
                <section className='ratingSection'>
                    <button className='ratingButton'>1</button>
                    <button className='ratingButton'>2</button>
                    <button className='ratingButton'>3</button>
                    <button className='ratingButton'>4</button>
                    <button className='ratingButton'>5</button>
                    <button className='ratingButton'>6</button>
                </section>
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default HowUnderstanding;