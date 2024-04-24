// Armazenando dom em uma variável

const buttons = document.querySelector("#image-picker li");

const image = document.querySelector("#product-image");

// Armazenar eventos
buttons.forEach((btn) => {
btn.addEventListener("click", (e)=>{
    console.log(e);
})
});