const mainTag = document.querySelector('main');

function darkModeHandler(self) {
    if(self.value === 'dark') {
        mainTag.style.backgroundColor = 'black';
        mainTag.style.color = 'white';
        self.value = 'daytime';
    } else {
        mainTag.style.backgroundColor = 'white';
        mainTag.style.color = 'black';
        self.value = 'dark';
    } 
} 

const abImgBox = document.querySelector('.abImgBox');
const songBox = document.querySelector('.songsBox');

abImgBox.addEventListener('mousedown', (e) => {
    console.log("이미지 클릭");
    songBox.style.display = 'block';
});
