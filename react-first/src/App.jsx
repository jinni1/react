import Board from "./Board";
import { useState } from "react";
import Button from "./Button";
import './App.css';

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);
    // useState 실행 결과 [a, b] 두 개의 배열이 결과로 발생
    // a에는 남자 코트 추천이 그대로 들어감
    // b에서는 값을 수정해주기 위한 함수가 들어감
    // 웹이 앱처럼 동작하게 만들기 위해 자주 변경되는 값을 state로 사용한다. 
    // => state를 사용하면 HTML이 자동으로 다시 랜더링된다. 

        const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    }

    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
    }

    return (
        <div className="App">
            <div>
                <Button className="App-button" color='blue' onClick={handleRollClick}>던지기</Button>
                <Button className="App-button" color='red' onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory}/>
                <Board name="상대" color="red" gameHistory={otherHistory}/>
            </div>
        </div>
    )
}

export default App;