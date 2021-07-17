import {useHistory} from 'react-router-dom';


function Review () {
    const history=useHistory();
    const handleSubmit = () => {
        history.push('/thankYou')
    }
    return (
        <>
            <h2>Review Your Feedback</h2>
            <section id='reviewSubmit'>
                <input type='text' placeholder='your thoughts' />
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default Review;