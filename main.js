// 날짜데이터 함수 넣기

const dateRender = () =>{
     let now = new Date()
    let dateList = {
        day: now.getDate(),
        month: now.getMonth()+1,
        year: now.getFullYear()
    };
    
    let dateHTMl = ` <div id="now-date">Today &nbsp;:&nbsp;${dateList.year} / ${dateList.month} / ${dateList.day} </div>`
    document.querySelector('.date-view').innerHTML = dateHTMl
}

dateRender();

//데일리 버튼 누르면 input 박스 보이게 하기

const openInputBox = () =>{
    let inputArea = document.querySelector(".input-none");
    inputArea.style.display = (inputArea.style.display === "inline") ? "none" : "inline";
  
}

//목록 버튼 누르면 선택,삭제 목록 나오게 하기
const openInAll = () =>{
    let inventoryArea = document.getElementById("btn-area");
    inventoryArea.style.display = (inventoryArea.style.display === "inline") ? "none" : "inline";
  
}

// input 내용 화면에 표시하기

let inputContent = document.getElementById('input-value')
let submitBtn = document.getElementById('submit-btn')
let taskList = []
submitBtn.addEventListener('click',submit)
inputContent.addEventListener("focus",()=>{  inputContent.value = "";})


inputContent.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      if (inputContent.value === "") {
        alert('내용을 입력하세요');
        return;
      }
      submit(event);
      inputContent.value = "";
    }
  });
  


function submit(){


    let task = {
        id:randomIDGenerate(),
        taskValue : inputContent.value,
        isComplete:false,
        isEditing: false
    }
    inputContent.value = "";
    taskList.push(task)
    console.log(taskList)


}




// 외부 클릭 시 목록 버튼 숨기기
let buttonArea = document.getElementById("btn-area")
document.addEventListener('mouseup', function (e) {
  const container = document.querySelector('.container');
  if (!container.contains(e.target)) {
    buttonArea.style.display = 'none';
  }
});



// 외부 클릭 시 input 버튼 숨기기

document.addEventListener('mouseup', function (e) {
  const inputArea = document.querySelector(".input-none");
  if (!document.querySelector('.container').contains(e.target)) {
    inputArea.style.display = 'none';
  }
 
});






// 랜덤아이디 만들어주기
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  

