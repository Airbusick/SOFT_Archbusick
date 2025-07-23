document.addEventListener('DOMContentLoaded', () => {
  const giftIcon = document.getElementById('giftIcon');
  const promoPanel = document.getElementById('promoPanel');
  const closePromo = document.getElementById('closePromo');

  if (giftIcon && promoPanel) {
    giftIcon.addEventListener('click', () => {
      promoPanel.classList.add('active');
      if (!bgMusic.paused) {
        bgMusic.pause();
        document.getElementById('soundIcon').src = 'picture/earsoff.png';
        bgVideo.muted = true;
      }
    });

    closePromo.addEventListener('click', () => {
      promoPanel.classList.remove('active');
    });
    document.addEventListener('click', (e) => {
  if (promoPanel.classList.contains('active') &&
      !promoPanel.contains(e.target) &&
      !giftIcon.contains(e.target)) {
    promoPanel.classList.remove('active');

    if (bgMusic.paused) {
      bgMusic.play().catch(e => console.log("Автовоспроизведение заблокировано"));
    }
  }
});

    document.addEventListener('click', (e) => {
      if (promoPanel.classList.contains('active') &&
          !promoPanel.contains(e.target) &&
          !giftIcon.contains(e.target)) {
        promoPanel.classList.remove('active');
      }
    });
  }
    const bgMusic = document.getElementById('bgMusic');
    const soundToggle = document.getElementById('soundToggle');
    const soundIcon = document.getElementById('soundIcon');
    const bgVideo = document.getElementById('bgVideo');

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

    document.body.addEventListener('click', initAudio, { once: true });

    function initAudio() {
        bgMusic.volume = 0.4;
        bgMusic.play()
            .then(() => soundIcon.src = 'picture/ears.png')
            .catch(e => console.log("Автовоспроизведение заблокировано"));
    }

    document.addEventListener('mousemove', (e) => {
        const title = document.querySelector('.title');
        const x = (window.innerWidth - e.pageX * 2) / 50;
        const y = (window.innerHeight - e.pageY * 2) / 50;
        title.style.transform = `translate(${x}px, ${y}px)`;
    });
});