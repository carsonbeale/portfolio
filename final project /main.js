
window.onload = function(){
    const colorThief = new ColorThief();
    const image    = document.querySelector('.preview');
    const palette = document.querySelector('.palette');
    const input = document.querySelector('[type="file"]');

    input.onchange = e =>{
        image.src = URL.createObjectURL(input.files[0])
    }

    const swatches = 10;

    var ancestor = document.getElementById('row'),
    descendents = ancestor.getElementsByTagName('SECTION');

    image.onload = () => {
        URL.revokeObjectURL(image.src);
        const colors =  colorThief.getPalette(image, swatches); 
        let index = 0   
        colors.reduce( (palette,rgb) => {
            const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`; 
            if (descendents[index] != null){
                const swatch = descendents[index];

                swatch.setAttribute('style', 'background-color: ' + color);
                swatch.innerHTML = '<p style="padding-left: 25px">' + color + '</p>'
                index = index + 1
            }     
            return palette;
        }, palette)
    }

}
