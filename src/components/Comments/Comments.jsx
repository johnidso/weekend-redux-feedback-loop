import {useHistory} from 'react-router-dom'
import {useState} from 'react';
import { useDispatch } from 'react-redux';

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
            <section id='commentsSubmit'>
                <input 
                    type='text' 
                    placeholder='your thoughts'
                    onChange = {event => setComment(event.target.value)} 
                />
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default Comments;