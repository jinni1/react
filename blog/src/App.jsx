import './App.css';
import React, { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['다제목1', '가제목2', '나제목3']);
  let [date, setDate] = useState(['1월 1일 발행', '2월 2일 빌헹', '3월 3일 발행']);
  let [likeCount, setLikeCount] = useState(0);

  function changeTitle(){
    var duTitle = [...title]; // 복사본 생성, 딥카피(중괄호를 제거한 뒤 다시 배열로 만듦)
    duTitle.sort(); // 제목 정렬

    setTitle( duTitle );
  }

  return (
    <div className='App'>
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick = { changeTitle }>버튼</button>
      <div className='list'>
        <h3> { title[0] } <span onClick={ () => { setLikeCount(likeCount++)} }>👍</span> { likeCount } </h3>
        <p> { date[1] } </p>
        <hr/>
        <h3> { title[1] } </h3>
        <p> { date[1] } </p>
        <hr/>
        <h3> { title[2] } </h3>
        <p> { date[2] } </p>
        <hr/>
      </div>

      <Modal/>

    </div>
  );
}

function Modal() { // Component 만들기, 이름은 항상 대문자로 시작, return은 하나의 태그로 묶기
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
// 상위 component에서 만든 state을 사용하려면 props 문법을 이용해야 한다.

export default App
