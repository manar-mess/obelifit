// Button click animation
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');

        setTimeout(() => {
            btn.classList.remove('clicked');
        }, 300);
    });
});
