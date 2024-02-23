function animateLetters(target, index) {
  gsap.to(target, {
    y: -20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.1 * index,
    ease: "power2.out",
    onComplete: function() {
      gsap.to(target, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.in"
      });
    }
  });
}

document.querySelectorAll(".menu__item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    const text = item.textContent;
    const chars = text.split('').map(char => `<span class="char">${char}</span>`).join('');
    item.innerHTML = chars;

    item.querySelectorAll(".char").forEach((char, index) => {
      animateLetters(char, index);
    });
  });

  item.addEventListener("mouseleave", () => {
    item.innerHTML = item.textContent;
  });
});


const progressBar = document.querySelector('.progress-bar');
const percentage = document.querySelector('.percentage');

gsap.to(progressBar, {
  width: '100%',
  duration: 2,
  ease: 'linear',
  onUpdate: function() {
    const progress = Math.round((progressBar.offsetWidth / progressBar.parentElement.offsetWidth) * 100);
    percentage.textContent = `${progress}%`;
  },
  onComplete: function() {
    percentage.textContent = '100%';
  }
});
