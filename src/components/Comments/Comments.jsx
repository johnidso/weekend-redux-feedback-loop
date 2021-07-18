import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Component for comments, dispatches to reducer and moves user to Review on Submit
function Comments () {
    const [comment, setComment] = useState('');
    const dispatch= useDispatch();
    const history=useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type:'COMMENT', payload: comment})
        setComment('');
        history.push('/review')
    }
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <section id='commentsInput'>
                <input 
                    type='text' 
                    placeholder='enter your thoughts'
                    onChange = {event => setComment(event.target.value)} 
                />
            </section>
                { comment ? 
                    (<button type='submit' onClick={handleSubmit}>Next</button>) :
                    (<p>Enter Feedback to Continue</p>)
                }
            
        </>
    )
}

export default Comments;