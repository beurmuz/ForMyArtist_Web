const mainTag = document.querySelector('main');
const introBox = document.querySelector('.introBox');

function darkModeHandler(self) {
    if(self.value === 'Night') {
        mainTag.style.backgroundColor = 'black';
        introBox.style.color = 'white';
        self.value = 'daytime';
    } else {
        mainTag.style.backgroundColor = 'white';
        mainTag.style.color = 'black';
        self.value = 'Night';
    } 
} 

const abImgBox = document.querySelector('.abImgBox');
const songBox = document.querySelector('.songsBox');

abImgBox.addEventListener('mousedown', (e) => {
    console.log("이미지 클릭");
    songBox.style.display = 'block';
});
