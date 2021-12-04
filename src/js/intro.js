'use strict';

let section = document.getElementsByTagName('section');
let dotBtn = document.querySelectorAll('.pointWrap li');

let pageNum = 0;
let totalNum = section.length;


for(let i = 0; i < dotBtn.length; i++) {
    dotBtnOnClick(i);
    // dotBtn[i].onclick = function() {
    //     console.log(i);
    // }
}

function dotBtnOnClick(index) {
    dotBtn[index].onclick = () => {
        // console.log(index);
        pageNum = index;
        pageOnChange();

        window.scrollTo({
            top: section[pageNum].offsetTop,
            behavior:  'smooth'        
        });
    }
}

window.addEventListener('scroll', (event) => {
    let scroll = this.scrollY;

    for(let i = 0; i < totalNum; i++) {
        if(scroll > section[i].offsetTop - window.outerHeight/1.5 && scroll < section[i].offsetTop - window.outerHeight/1.5 + section[i].offsetHeight) {
            pageNum = i;
            break;
        }
        // 페이지 이동
        pageOnChange();
    }
});

function pageOnChange() {
    for(let i = 0; i < totalNum; i++) {
        section[i].classList.remove('active');
        dotBtn[i].classList.remove('active');
    }
    section[pageNum].classList.add('active');
    dotBtn[pageNum].classList.add('active');
}

pageOnChange();