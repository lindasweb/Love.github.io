function iniciar(){
    let nombre = document.getElementById("nombre").value;
    if(nombre.trim() === "") return;

    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";

    crearCorazon(nombre);
}