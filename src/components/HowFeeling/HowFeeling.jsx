import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function HowFeeling () {
    const history=useHistory();
    const dispatch = useDispatch();
    const [rating, setRating] = useState('');
    // dispatch event for rating
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type:'FEELINGS', payload:rating});
        setRating('');
        history.push('/understanding')
    }
    return (
        <>
            <h2>How are you feeling today?</h2>
            <section id='feelingSubmit'>
                <section className='ratingSection'>
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

export default HowFeeling;