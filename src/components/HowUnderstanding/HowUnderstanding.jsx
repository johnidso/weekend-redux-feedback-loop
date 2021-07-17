import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function HowUnderstanding () {
    const history=useHistory();
    const dispatch = useDispatch();
    const [rating, setRating] = useState('');
    const handleSubmit = () => {
        dispatch({type:'UNDERSTANDING', payload:rating});
        history.push('/supported')
    }
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <section id='understandingSubmit'>
                <section className='ratingSection'>
                    <button className='ratingButton' onClick= {setRating(1)}>1</button>
                    <button className='ratingButton' onClick= {setRating(2)}>2</button>
                    <button className='ratingButton' onClick= {setRating(3)}>3</button>
                    <button className='ratingButton' onClick= {setRating(4)}>4</button>
                    <button className='ratingButton' onClick= {setRating(5)}>5</button>
                    <button className='ratingButton' onClick= {setRating(6)}>6</button>
                </section>
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default HowUnderstanding;