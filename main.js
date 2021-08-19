(() => {
    const downToggleBtn = document.querySelector('.navbar_toggleBtn');
    const downBar = document.querySelector('.downbar');
    const iconSoundCld = document.querySelector('.icon_soundCld');
    const iconTwitter= document.querySelector('.icon_twitter');
    const iconInstagram = document.querySelector('.icon_instagram');
    const iconFacebook = document.querySelector('.icon_facebook');

    downToggleBtn.addEventListener('click', () => {
        downBar.classList.toggle('active');
    });

    iconSoundCld.addEventListener('click', () => {
        window.open('https://soundcloud.com/younghotyellow');
    });

    iconTwitter.addEventListener('click', () => {
        window.open('https://twitter.com/younghotyellow');
    });

    iconInstagram.addEventListener('click', () => {
        window.open('https://instagram.com/younghotyellow94');
    });

    iconFacebook.addEventListener('click', () => {
        window.open('https://www.facebook.com/younghotyellow94official');
    });
})();