import {useHistory} from 'react-router-dom'


function Comments () {
    const history=useHistory();
    const handleSubmit = () => {
        history.push('/review')
    }
    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <section id='commentsSubmit'>
                <input type='text' placeholder='your thoughts' />
                <button type='submit' onClick={handleSubmit}>Next</button>
            </section>
        </>
    )
}

export default Comments;