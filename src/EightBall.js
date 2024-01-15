import React , {useState} from 'react';
import "./EightBall.css";

const EightBall = ({answers}) => {
    // Generate a random index for to pick from 'answers' array
    const genRandom = () => Math.floor(Math.random() * answers.length) 
    const makeAnswer = () => {
        let randIdx = genRandom();
        let newAnswer = {msg: answers[randIdx].msg, color: answers[randIdx].color}
        setAnswer(newAnswer);
    }
    const [answer, setAnswer] = useState({msg: "Think of a Question", color: 'black'});
    return(
        <div className="EightBall-container" style={{backgroundColor: answer.color}} onClick={makeAnswer}>
            <h2 className="Answer">{answer.msg}</h2>
        </div>
    )
}

export default EightBall;