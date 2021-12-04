let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let diskBox = document.querySelector(".diskBox");
let diskInner = document.querySelectorAll(".disk_inner");
let album = document.querySelectorAll(".album");
let pointBtnAll = document.querySelectorAll(".pointBox li");

let pageNum = 0;
let totalNum = album.length;

prevBtn.addEventListener('click', () => {
    if(pageNum > 0) {
        pageNum--;
    } else {
        pageNum = totalNum - 1;
    }
    pageChangeFunc();
});

nextBtn.addEventListener('click', () => {
    if(pageNum < totalNum-1){
        pageNum ++;
    }else{
        pageNum = 0;
    }
    pageChangeFunc();
});

pageChangeFunc();

function pageChangeFunc() {
    for(let i = 0; i < totalNum; i++) {
        if(pageNum == i){
            album[i].classList.add("active");
            pointBtnAll[i].classList.add("active");
        }else{
            album[i].classList.remove("active");
            pointBtnAll[i].classList.remove("active");
        }
    }
}

// 하트 버튼을 누르면 해당 순서에 맞게 이동
for(let i = 0; i < pointBtnAll.length; i++) {
    heartBtnOnClick(i);
}

function heartBtnOnClick(index) {
    pointBtnAll[index].onclick = () => {
        pageNum = index;
        pageChangeFunc();
    }
}