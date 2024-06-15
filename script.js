document.querySelectorAll('.text').forEach(textBox => {
    textBox.addEventListener('dblclick', function () {
        const content = this.innerHTML;
        const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
        const fullscreenContent = document.querySelector('.fullscreen-content .content');

        fullscreenContent.innerHTML = content;
        fullscreenOverlay.style.display = 'flex';
    });
});

document.querySelector('.back').addEventListener('click', function () {
    document.querySelector('.fullscreen-overlay').style.display = 'none';
});


