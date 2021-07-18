import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

axios.post()

function Review () {
    const history=useHistory();
    const feedback = useSelector(store => store);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/', feedback)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log('Could not POST feedback to db', err);
        })
        history.push('/thankYou')
    }
    const handleBack = event => {
        event.preventDefault();
        history.push('/comments')
    }
    return (
        <>
            <h2>Review Your Feedback</h2>
            <section id='reviewSubmit'>
                <p>Feelings: {feedback.feelings}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.support}</p>
                <p>Comments: {feedback.comment}</p>
            </section>
            <button className="back" onClick={handleBack}>Back</button>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Review;