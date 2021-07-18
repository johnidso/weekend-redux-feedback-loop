import { useHistory } from "react-router";

function ThankYou () {
    const history=useHistory();
    const handleClick = () => {
        history.push('/');
    }
    return(
    <>
        <h2>Thank you!</h2>
        <p>Your feedback has been recorded.</p>
        <button onClick={handleClick}>Submit More Feedback</button>
    </>
    )
}

export default ThankYou;