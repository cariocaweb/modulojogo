function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    // eixo x
    var p1 = Math.floor(Math.random() * 500); 
    // eixo y
    var p2 = Math.floor(Math.random() * 400); 
    //localização da bola
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");   
    // ação de clicar na bola 
    bola.setAttribute("onclick", "estourar(this)"); 
    //colocar na tela
    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
}
function iniciar(){
    setInterval(addBola, 1000);
}