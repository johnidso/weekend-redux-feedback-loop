import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';



function Review () {
    const history=useHistory();
    const feedback = useSelector(store => store);
    const handleSubmit = () => {
        history.push('/thankYou')
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
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Review;