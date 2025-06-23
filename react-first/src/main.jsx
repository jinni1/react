// 리액트 파일 중에서 가장 먼저 실행되는 파일 

import { Fragment } from 'react';
import ReactDom from 'react-dom/client';
import App from './App';



// react-dom 패키지에서 디폴트로 익스포트 하는 객체를 ReactDom 이라는 이름으로 임포트해서 
// 이 객체의 render 메소드를 실행한다. 
const root = ReactDom.createRoot(document.getElementById('root'));
/*
root.render(
    <Fragment> 
        <p>안녕</p>
        <p>리액트</p>
    </Fragment>
);
*/
// render 메소드를 이용해서 html 태그를 만들어 준다.
// 첫 번째 아규먼트로 html 태그를 사용
// Dom 요소들 중 root라는 id를 가지고 있는 html 요소가 두 번째 아규먼트로 사용
// render 메소드가 실행되면 첫 번째 아규먼트로 새로운 html요소를 만들고 만든 요소를 두 번째 아규먼트 값으로 넣는다.

// fragment를 사용하면 불필요한 <div> 사용을 줄일 수 있다 축약해서 <>로 사용할 수 있다.

// 자바스크립트의 변수를 사용하는 방법 -> 중괄호를 이용한다.
const product = 'MacBook';

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png';


function handleClick() {
  alert('곧 도착합니다!');
}

/*root.render(
  <h1>나만의 {product} 주문하기</h1>
);
*/


// 괄호 안에는 자바스크립트로 된 표현식을 사용할 수 있다. 
root.render(
  <>
  <App/>
    <h1>나만의 {product.toUpperCase()} 주문학기</h1>
    <img src={imageUrl} alt="제품 사진"/>
    <button onClick={handleClick}>확인</button>
  </>
);
// 괄호 안에서 자바스크립트의 메소드를 사용할 수 있다. 

// 데이터 바인딩을 쉽게 할 수 있음!
