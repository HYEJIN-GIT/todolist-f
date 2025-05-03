
// 날짜데이터 표시하기

const dateRender = () =>{

  let now = new Date()
  let dateList = {

    day : now.getDate(),
    month : now.getMonth()+1,
    year : now.getFullYear()

  }
  
  let dateContents = `<div id = "now-date" >${dateList.year} / ${dateList.month} / ${dateList.day}</div>`
  document.getElementById('date-display').innerHTML = dateContents
}

dateRender()

//목록 버튼 보이게 하기
let buttonArea = document.getElementById("btn-area")

const openInAll = () =>{
 
  
  if (buttonArea.style.display === "block") {
    buttonArea.style.display = "none";
  } else {
    buttonArea.style.display = "block";
  }
}

//daily 버튼 보여주기
let taskView = document.getElementById('input-none')
const openInput = ()=>{
  if (taskView.style.display === "inline") {
    taskView.style.display = "none";
  } else {
    taskView.style.display = "inline";
  }
}

//input에 있는 내용 화면에 보여주기
let InputValue = document.getElementById('input-value');
let submitBtn = document.getElementById('plus-btn')
let taskList = []
//enter시 할일 표시
InputValue.addEventListener('keydown',function(event){
  if(event.keyCode === 13)
  { 
    if(InputValue.value =="")
      {alert('내용을 입력하세요')
        return
      }
      submitContents(event)
      InputValue.value = ""
    }})

//버튼 누를 시 할일 표시
submitBtn.addEventListener('click',submitContents)

function submitContents(){

  let tasks = {

      randomId : randomIDGenerate(),
      taskContents: InputValue.value,
      isComplete: false,
      isEditing: false
  }
  taskList.push(tasks)
  console.log(taskList)
  resultRender()
}

const  resultRender = () =>{
  let todoHTML = taskList.map((task)=>`
  
  
  
  <div id="inputs">

  <div class = "check-todo">
    <button class="circle">
        </button>
         ${task.taskContents}
  </div>
 
</div>




  
   
  `).join("");

  document.getElementById("todolist-views").innerHTML = todoHTML;
}




// ID 생성 함수
function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}


