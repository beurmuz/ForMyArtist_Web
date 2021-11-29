(() => {
    const downToggleBtn = document.querySelector('.navbar_toggleBtn');
    const downBar = document.querySelector('.downbar');
    const iconSoundCld = document.querySelector('.icon_soundCld');
    const iconTwitter= document.querySelector('.icon_twitter');
    const iconInstagram = document.querySelector('.icon_instagram');
    const iconFacebook = document.querySelector('.icon_facebook');
    const iconYoutube = document.querySelector('.icon_youtube');

    downToggleBtn.addEventListener('click', () => {
        downBar.classList.toggle('active');
    });

})();