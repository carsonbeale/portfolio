
window.onload = function(){
    const colorThief = new ColorThief();
    const image    = document.querySelector('.preview');
    const palette = document.querySelector('.palette');
    const input = document.querySelector('[type="file"]');

    input.onchange = e =>{
        image.src = URL.createObjectURL(input.files[0])
    }

    const swatches = 12;



image.onload = () => {
    URL.revokeObjectURL(image.src);
    const colors =  colorThief.getPalette(image, swatches);    
    while (palette.firstChild) palette.removeChild(palette.firstChild);
    colors.reduce( (palette,rgb) => {
        const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;        
        const swatch = document.createElement('div');
        swatch.style.setProperty('--color', color);
        swatch.setAttribute('color', color);
        palette.appendChild(swatch);
        return palette;
    }, palette)
}

}
