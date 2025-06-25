// 리액트 파일 중에서 가장 먼저 실행되는 파일 
// react-dom 패키지에서 디폴트로 익스포트 하는 객체를 ReactDom 이라는 이름으로 임포트해서 
// 이 객체의 render 메소드를 실행한다. 
// render 메소드를 이용해서 html 태그를 만들어 준다.
// 첫 번째 아규먼트로 html 태그를 사용
// Dom 요소들 중 root라는 id를 가지고 있는 html 요소가 두 번째 아규먼트로 
// render 메소드가 실행되면 첫 번째 아규먼트로 새로운 html요소를 만들고 만든 요소를 두 번째 아규먼트 값으로 넣는다.

import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
