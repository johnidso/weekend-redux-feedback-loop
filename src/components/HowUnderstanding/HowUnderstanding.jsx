import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function HowUnderstanding () {
    const history=useHistory();
    const dispatch = useDispatch();
    const [rating, setRating] = useState('');
    // dispatch event
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type:'UNDERSTANDING', payload:rating});
        setRating('');
        history.push('/supported')
    }
    const handleBack = event => {
        event.preventDefault();
        history.push('/')
    }
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <section id='understandingSubmit'>
                <section className='ratingSection'>
                    <button className="back" onClick={handleBack}>Back</button>
                    <button className='ratingButton' onClick= {() => setRating(1)}>1</button>
                    <button className='ratingButton' onClick= {() =>setRating(2)}>2</button>
                    <button className='ratingButton' onClick= {() => setRating(3)}>3</button>
                    <button className='ratingButton' onClick= {() =>setRating(4)}>4</button>
                    <button className='ratingButton' onClick= {() => setRating(5)}>5</button>
                    <button className='ratingButton' onClick= {() => setRating(6)}>6</button>
                </section>
                <h3>{rating}</h3>
                {/* conditionally render Next if rating exists */}
                {rating ? 
                    (<button type='submit' onClick={handleSubmit}>Next</button>) :
                    (<p>Please select a response to continue.</p>)
                }            
            </section>
        </>
    )
}

export default HowUnderstanding;