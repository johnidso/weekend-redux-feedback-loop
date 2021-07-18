import { useHistory } from "react-router";

function ThankYou () {
    const history=useHistory();
    const onClick = () => {
        history.push('/');
    }
    return(
    <>
        <h2>Thank you for your feedback!</h2>
        <button onClick={handleClick}>Submit More Feedback</button>
    </>
    )
}

export default ThankYou;