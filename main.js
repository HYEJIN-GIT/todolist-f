
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

// 목록 버튼 보이게 하기
const buttonArea = document.getElementById('btn-area');
const openInAll = () => {
  buttonArea.style.display = buttonArea.style.display === 'block' ? 'none' : 'block';
};

// daily 버튼 보여주기
const taskView = document.getElementById('input-none');
const openInput = () => {
  taskView.style.display = taskView.style.display === 'inline' ? 'none' : 'inline';
};


//input에 있는 내용 화면에 보여주기
let InputValue = document.getElementById('input-value');
let submitBtn = document.getElementById('plus-btn')
let taskList = []


//경고창

const warn = (message,callback) => {
  const confirmation = confirm(message);
  callback(confirmation);//콜백 호출하기 (true/false)
};


//enter시 할일 표시
InputValue.addEventListener('keydown',function(event){
  if(event.keyCode === 13)
  { 
    if(InputValue.value.trim() === '')
      {   
        warn('내용을 입력하세요.', () => {});
      
        return
      }
      submitContents()
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
  resultRender()
}

const  resultRender = () =>{
  let todoHTML = taskList.map((task)=>`
  
  <div id="inputs">

  <div class = "check-todo  ${task.isComplete ? "check-line" : ""}"">
  <button class="circle" onclick = "checkBtn('${task.randomId}')">
     ${task.isComplete ? '<div class="complete"></div>' : ""}
        </button>
        ${
          task.isEditing
            ? `<input type="text" id="edit-${task.randomId}" class="edit-input" value="${task.taskContents}"
               onblur="handleEdit(event, '${task.randomId}')"
               onkeydown="handleEdit(event, '${task.randomId}')">`
            : `<div ondblclick="updateBtn('${task.randomId}')">${task.taskContents}</div>`
        }
      </div>
      <div>
        <button class="update-btn" onclick="updateBtn('${task.randomId}')">
          ${task.isEditing 
            ? '<i class="fa-solid fa-check"></i>' 
            : '<i class="fa-solid fa-pen-to-square"></i>' 
          }
        </button>
        <button class="cancel-btn" onclick="deleteBtn('${task.randomId}')">
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>

  
   
  `).join("");

  document.getElementById("todolist-views").innerHTML = todoHTML;
  restSet()

}


//외부 클릭 시 창 닫기 (목록)

document.addEventListener('mouseup', function(e) {
  const container = document.querySelector('.container');

  if (!container.contains(e.target)) {
    buttonArea.style.display = 'none';
  }
});


//외부 클릭 시 창 닫기(daily)

document.addEventListener('mouseup', function(e) {
  const container = document.querySelector('.container');

  if (!container.contains(e.target)) {
    taskView.style.display = 'none';
  }
});




//할일 체크 버튼

const checkBtn = (randomId) =>{
taskList.forEach(task =>{
if(task.randomId === randomId){
  task.isComplete = !task.isComplete
}

})
resultRender()
}


//삭제 버튼

const deleteBtn = (randomId) =>{
taskList = taskList.filter(task => task.randomId !== randomId)
resultRender()

}

//전체 삭제 버튼

document.getElementById('all-del').addEventListener("click", () => {


  if (taskList.length === 0) {
    return; 
  }


  warn('정말 삭제하시겠습니까?', (confirmation) => {
    if (confirmation) {
      taskList = [];  
      resultRender(); 
      buttonArea.style.display = "none"; 
    }
  });
});


//전체 선택버튼

document.getElementById('all-check').addEventListener('click',()=>{
  if (taskList.length === 0) {
    return; 
  }
taskList.forEach(task => checkBtn(task.randomId))
buttonArea.style.display = "none";

})

//update 함수

const updateBtn = (randomId) => {
  taskList.forEach(task => {
    if (task.randomId === randomId) {
      task.isEditing = true;
    }
  });
resultRender()


  // 자동 포커스 설정
  setTimeout(() => {
    document.querySelector(`#edit-${randomId}`).focus();
  }, 0);
};


// 입력 필드 이벤트 
const handleEdit = (event, randomId) => {
  const inputElement = event.target;
  
  if (event.key === "Enter" || event.type === "blur") {
    saveEditedTask(randomId, inputElement.value.trim());
  } else if (event.key === "Escape") {
    cancelEdit(randomId);
  }
};

// 수정된 내용 저장
const saveEditedTask = (randomId, newText) => {
  taskList.forEach(task => {
    if (task.randomId === randomId) {
      task.taskContents = newText || task.taskContents; 
      task.isEditing = false;
    }
  });
 
  resultRender()
};

// 수정 취소 
const cancelEdit = (randomId) => {
  taskList.forEach(task => {
    if (task.randomId === randomId) {
      task.isEditing = false;
    }
  });
  resultRender()
};




// ID 생성 함수
function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}


//남은 할일 보여주기

const restSet = () => {
  const left = taskList.filter(task => !task.isComplete).length;
  document.querySelector('.todo-rest').innerHTML = `${left} thing left`;
}
