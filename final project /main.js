
window.onload = function(){
    const image    = document.querySelector('.preview');
    const input = document.querySelector('[type="file"]');

    input.onchange = e =>{
        image.src = URL.createObjectURL(input.files[0])
    }
}
