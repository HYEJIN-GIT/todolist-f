
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

//input 버튼 보여주기
let taskView = document.getElementById('input-none')
const openInput = ()=>{
  if (taskView.style.display === "block") {
    taskView.style.display = "none";
  } else {
    taskView.style.display = "block";
  }
}

