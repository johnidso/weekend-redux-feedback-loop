import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Component for comments, dispatches to reducer and moves user to Review on Submit
function Comments () {
    const [comment, setComment] = useState('');
    const dispatch= useDispatch();
    const history=useHistory();
    // dispatch event
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type:'COMMENT', payload: comment})
        setComment('');
        history.push('/review')
    }
    const handleBack = event => {
        event.preventDefault();
        history.push('/supported')
    }
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <section id='commentsInput'>
                <button className="back" onClick={handleBack}>Back</button>
                <input 
                    type='text' 
                    placeholder='enter your thoughts'
                    onChange = {event => setComment(event.target.value)} 
                />
            </section>
            {/* conditionally render Next if comment exists */}
            { comment ? 
                (<button type='submit' onClick={handleSubmit}>Next</button>) :
                (<p>Enter Feedback to Continue</p>)
            }
            
        </>
    )
}

export default Comments;