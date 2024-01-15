import React , {useState} from 'react';
import "./EightBall.css";

const EightBall = ({answers}) => {
    // Generate a random index for answer
    const genRandom = () => Math.floor(Math.random() * answers.length) 
    const makeAnswer = () => {
        let randIdx = genRandom();
        let newAnswer = {msg: answers[randIdx].msg, color: answers[randIdx].color}
        setAnswer(newAnswer);
    }
    const [answer, setAnswer] = useState({msg: "Think of a Question", color: 'black'});
    return(
        <div className="EightBall" onClick={makeAnswer}>
            <p1>{answer.msg}</p1>
            <p1>{answer.color}</p1>
        </div>
    )
}

export default EightBall;