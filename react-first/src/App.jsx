import Board from "./Board";
import { useState } from "react";
import Button from "./Button";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    // useState 실행 결과 [a, b] 두 개의 배열이 결과로 발생
    // a에는 남자 코트 추천이 그대로 들어감
    // b에서는 값을 수정해주기 위한 함수가 들어감
    // 웹이 앱처럼 동작하게 만들기 위해 자주 변경되는 값을 state로 사용한다. 
    // => state를 사용하면 HTML이 자동으로 다시 랜더링된다. 

    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

        const handleRollClick = () => {
        const nextNum = random(6);
        const nextOtherNum = random(6);
        setNum(nextNum);
        setSum(sum+nextNum);
        setGameHistory([...gameHistory, nextNum]);
        setOtherNum(nextOtherNum);
        setOtherSum(otherSum+nextOtherNum);
        setOtherGameHistory([...otherGameHistory, nextOtherNum]);
    }

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
        setOtherNum(1);
        setSum(0);
        setOtherGameHistory([]);
    }

    return (
        <>
        <div>
            <Button onClick={handleRollClick}>던지기</Button>
            <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
            <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
            <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
        </div>
        </>
    )
}

export default App;