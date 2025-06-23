import HandButton from "./HandButton";
import Button from "./Button";
import { useState } from "react";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function getResult(me, other) {
    
}

function App() {
    const [hand, setHand] = useState('rock');

    const generateRandomHand = () => {
        const num = random(3);
        if (num === 1) return 'rock';
        else if (num === 2) return 'scissor';
        else return 'paper';
    }

    const handleButtonClick = () => {
        const nextHand = generateRandomHand();
        setHand(nextHand);
    }

    const handleClearClick = () => {
        setHand('rock');
    }

    const handleButtonClick = (value) => console.log(value);
    const handleClearClean = () => console.log("처음부터");

    return (
        <>
        <Button onClick={handleClearClean}>처음부터</Button>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
        </>
    );
}

export default App;