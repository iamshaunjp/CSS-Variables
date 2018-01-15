var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root');

swatches.forEach((swatch) => {
    swatch.addEventListener('click', (e) => {
        root.style.setProperty('--theme-color', e.target.style.background);
    });
});
