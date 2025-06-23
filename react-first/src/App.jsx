import Button from "./Button";
import Dice from "./Dice";
import { useState } from "react";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
    }

    const handleClearClick = () => {
        setNum(1);
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <Dice color="red" num={num}/>
        </div>
    );
}
// props : 컴포넌트에 지정된 속성
// prop는 하나의 객체 형태로 컴포넌트 함수의 첫 번째 파라미터로 전달된다.
// 숫자를 전달할 때 {}로 묶어주어야 한다. 

// children prop : prop을 가공하지 않고 그대로 보여주기만 할 때 사용, 직관적인 코드 작성 가능

export default App;