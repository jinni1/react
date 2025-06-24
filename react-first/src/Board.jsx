import Dice from "./Dice";

function Board({name, color, num, sum, gameHistory}) {
    
    return (
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            {gameHistory.join(', ')}
        </div>
    );
}
// props : 컴포넌트에 지정된 속성
// prop는 하나의 객체 형태로 컴포넌트 함수의 첫 번째 파라미터로 전달된다.
// 숫자를 전달할 때 {}로 묶어주어야 한다. 

// children prop : prop을 가공하지 않고 그대로 보여주기만 할 때 사용, 직관적인 코드 작성 가능

export default Board;