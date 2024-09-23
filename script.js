const button = document.getElementById("tombol");
console.log(button);

button.addEventListener("click", () =>{
    console.log('clicked');
    const paragraf = document.getElementById("text");
    paragraf.style.fontSize = "30px";
    paragraf.style.color = "red";
    window.alert("halo guisss");
    document.write("<h1> ini adalah h1 </h1>");
})