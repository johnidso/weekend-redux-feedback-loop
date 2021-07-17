import {useHistory} from 'react-router-dom'


function HowSupported () {
    const history=useHistory();
    const handleSubmit = () => {
        history.push('/comments')
    }
    return (
        <>
            <h2>How well are you being supported?</h2>
            <section id='supportedSubmit'>
                <input type='text' />
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default HowSupported;