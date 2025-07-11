import HandButton from "./HandButton";
import Button from "./Button";
import { useState } from "react";
import { compareHand, generateRandomHand } from "./utils";
import HandIcon from "./HandIcon";

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return "승리";
    if (comparison < 0) return "패배";
    return "무승부";
}

function App() {
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    const handleButtonClick = (nextHand) => {
        setHand(nextHand);
        const randomhand = generateRandomHand();
        setOtherHand(randomhand);
        const nextHistoryItem = getResult(nextHand, randomhand);
        setGameHistory([...gameHistory, nextHistoryItem]);
        const comparison = compareHand(nextHand, randomhand);
        if (comparison > 0) setScore(score+bet);
        if (comparison < 0) setOtherScore(otherScore+bet);
    }

    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setGameHistory([]);
        setScore(0);
        setOtherScore(0);
        setBet(1);
    }

    const handleBetChange = (e) =>{
        let num = Number(e.target.value);
        if (num > 9) num %= 10;
        if (num < 1) num = 1;
        num = Math.floor(num);
        setBet(num);
    }

    return (
        <>
        <Button onClick={handleClearClick}>처음부터</Button>
        <div>
            {score} : {otherScore}
        </div>
        <div>
            <HandIcon value={hand}/>
            VS
            <HandIcon value={otherHand}/>
        </div>
        <div>
            <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
        </div>
        <p>승부 기록: {gameHistory.join(', ')}</p>
        <div>
            <HandButton value="rock" onClick={handleButtonClick}/>
            <HandButton value="scissor" onClick={handleButtonClick}/>
            <HandButton value="paper" onClick={handleButtonClick}/>
        </div>
        </>
    );
}

export default App;