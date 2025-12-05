// Tooltip logic
const villageItems = document.querySelectorAll('.village-item');
const tooltip = document.getElementById('tooltip');
const tooltipText = document.getElementById('tooltip-text');

villageItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        tooltipText.textContent = item.dataset.tip;
        tooltip.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
