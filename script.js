const button = document.getElementById("tombol");
console.log(button);

button.addEventListener("click", () =>{
    console.log('clicked');
    const paragraf = document.getElementById("text");
    paragraf.style.fontSize = "30px";
    paragraf.style.color = "red";
    let text = '';
    text.innerHTML = '<h1>halo ini innerhtml </h1>';
})