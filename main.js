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
