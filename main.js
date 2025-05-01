
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