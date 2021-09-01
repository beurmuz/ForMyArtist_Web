const mainTag = document.querySelector('main');

function darkModeHandler(self) {
    if(self.value === 'dark') {
        mainTag.style.backgroundColor = 'darkgray';
        mainTag.style.color = 'white';
        self.value = 'daytime';
    } else {
        mainTag.style.backgroundColor = 'white';
        mainTag.style.color = 'darkgray';
        self.value = 'dark';
    } 
} 