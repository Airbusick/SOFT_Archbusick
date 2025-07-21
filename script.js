// script.js (упрощенная версия без загрузки файлов)
document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    const soundToggle = document.getElementById('soundToggle');
    const soundIcon = document.getElementById('soundIcon');
    const bgVideo = document.getElementById('bgVideo');

    // Управление звуком
    soundToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play()
                .then(() => {
                    soundIcon.src = 'picture/ears.png';
                    bgVideo.muted = false;
                })
                .catch(e => console.log("Автовоспроизведение заблокировано"));
        } else {
            bgMusic.pause();
            soundIcon.src = 'picture/earsoff.png';
            bgVideo.muted = true;
        }
    });

    // Автозапуск музыки при взаимодействии
    document.body.addEventListener('click', initAudio, { once: true });

    function initAudio() {
        bgMusic.volume = 0.4;
        bgMusic.play()
            .then(() => soundIcon.src = 'picture/ears.png')
            .catch(e => console.log("Автовоспроизведение заблокировано"));
    }

    // Параллакс-эффект для заголовка
    document.addEventListener('mousemove', (e) => {
        const title = document.querySelector('.title');
        const x = (window.innerWidth - e.pageX * 2) / 50;
        const y = (window.innerHeight - e.pageY * 2) / 50;
        title.style.transform = `translate(${x}px, ${y}px)`;
    });
});