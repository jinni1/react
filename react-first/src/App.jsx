import Button from "./Button";
import Dice from "./Dice";
import { useState } from "react";

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    // useState 실행 결과 [a, b] 두 개의 배열이 결과로 발생
    // a에는 남자 코트 추천이 그대로 들어감
    // b에서는 값을 수정해주기 위한 함수가 들어감
    // 웹이 앱처럼 동작하게 만들기 위해 자주 변경되는 값을 state로 사용한다. 
    // => state를 사용하면 HTML이 자동으로 다시 랜더링된다. 
    
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