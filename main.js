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
let tasksList = []
submitBtn.addEventListener('click',submit)

function submit(){


    let task = {
        id:randomIDGenerate(),
        taskValue : inputContent.value,
        isComplete:false,
        isEditing: false
    }

    tasksList.push(task)
    console.log(tasksList)
    todoRender()

}


const todoRender = () => {

    let todoHTML = tasksList.map((task)=>`
    <div id = "tasks">
    <div>
    ${task.taskValue}
    
    </div>
 
    </div>
   
    
    `).join("")

    document.querySelector(".todo-views").innerHTML = todoHTML;


}
todoRender()




// 랜덤아이디 만들어주기
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  

