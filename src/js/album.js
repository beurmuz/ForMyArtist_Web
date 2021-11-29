
const abImgBox = document.querySelector('.abImgBox');
const songBox = document.querySelector('.songsBox');

abImgBox.addEventListener('mousedown', (e) => {
    console.log("이미지 클릭");
    songBox.style.display = 'block';
});
