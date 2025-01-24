export default function Events() {

    // click 시 showName 함수 실행
    function showName() {
        console.log("Mike");
    }

    // input 창에 text 입력 시 출력
    function showText(e) {
        console.log(e.target.value);
        // target : input
        // value : input 내용
    }

    return (
        <div>
            <h1>Handling Events</h1>

            {/* click 시 showName 함수 실행 */}
            <button onClick={showName}>Show name</button>

            {/* input 창에 text 입력 시 출력 */}
            <input type="text" onChange={showText}/>

            {/* onClick 내부에 함수 생성 > 내부에 함수로 실행할 내용 작성 */}
            <button onClick={ () => { console.log("Jeong"); } }>Jeong</button>

            {/* onChange 이벤트 내부에 함수 생성 */}
            <input type="text" onChange={ e => { console.log(e.target.value) } }/>
        </div>
    );
}

/*********************************************************************************************
** 이벤트 처리 (Handling Events) **
1. 실행할 내용을 함수로 만들고, onClick={함수명}으로 이벤트 적용
ex. click 시 showName 함수 실행
function  showName() {
  console.log("Mike");
}

return (
  <div>
    <button onClick={showName}>Show name</button>
  </div>
)

ex. input 창에 text 입력 시 출력
function showText(e) {
  console.log(e.target.value);
  // target : input
  // value : input 내용
}

return (
  <div className="App">
    <input type="text" onChange={showText}/>
  </div>
);

2. onClick 내부에 함수 생성
ex. 내부에 함수로 실행할 내용 작성
<button 
  onClick={() => {
    console.log("Mike");
  }}
>
  Show name
</button>

ㄴ 장점 : 매개변수를 전달하기 편하다
ex. 매개변수 전달
function showName(name) {
  console.log(name);
}

return (
  <div>
    <button
      onClick={() => {
        showName("Mike")
      }}
    >
      Show name
    </button>
  </div>
)

ex. input 창에 text 입력 시 출력 (내부에 함수 생성)
<input 
  type="text" 
  onChange={e => {
    console.log(e.target.value);  
  }}
/>

ex. input 창에 text 입력 시 출력 (함수 생성후 매개변수로 전달)
function showText(txt) {
  console.log(txt);
}

return (
  <div className="App">
    <input type="text" onChange={e => {
      const txt = e.target.value;
      showText(txt);
    }}/>
  </div>
);
*********************************************************************************************/
