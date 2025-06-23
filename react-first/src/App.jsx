import React, { useState } from "react";

function App() {

    let [count, setCount] = useState('남자 코트 추천');
    // useState 실행 결과 [a, b] 두 개의 배열이 결과로 발생
    // a에는 남자 코트 추천이 그대로 들어감
    // b에서는 값을 수정해주기 위한 함수가 들어감
    // 웹이 앱처럼 동작하게 만들기 위해 자주 변경되는 값을 state로 사용한다. 
    // => state를 사용하면 HTML이 자동으로 다시 랜더링된다. 

    return(
        <p> { count } </p>
    );
}

export default App;