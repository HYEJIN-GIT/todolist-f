// 날짜데이터 함수 넣기

const dateRender = () =>{
     now = new Date()
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