import {useHistory} from 'react-router-dom'


function HowFeeling () {
    const history=useHistory();
    const handleSubmit = () => {
        history.push('/understanding')
    }
    return (
        <>
            <h2>How are you feeling today?</h2>
            <section id='feelingSubmit'>
                <input type='number' placeholder='enter number 1-6' />
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default HowFeeling;