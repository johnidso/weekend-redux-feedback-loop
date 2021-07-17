import {useHistory} from 'react-router-dom'


function HowUnderstanding () {
    const history=useHistory();
    const handleSubmit = () => {
        history.push('/supported')
    }
    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <section id='understandingSubmit'>
                <input type='number' placeholder='enter number 1-6' />
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default HowUnderstanding;