import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

// jsx 문법으로 작성한 요소 -> 자바스크립트 객체가 됨
// 예시 : const element = <h1>안녕 리엑트!</h1>;
// 이런 객체를 리액트 엘리먼트라고 부르며 ReactDOM.render 함수의 아규먼트로 전달되면
// 리액트가 객체 형태의 값을 해석해 HTML 형태로 브라우저에 띄워준다.

const DICE_IMAGES = {
    blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
    red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

function Dice({color = "blue", num = 1}) { // 컴포넌트의 첫 글자는 대문자로 작성해야 한다. 
    const src = DICE_IMAGES[color][num -1 ];
    const alt = `${color} ${num}`;
    return <img src={src} alt = {alt} />;
} 
// 함수를 이용하여 리액트 엘리먼트를 만들 수 있는데, 이처럼 리액트 엘리먼트를 리턴하는
//함수를 리액트 컴포넌트라고 한다. 

export default Dice;