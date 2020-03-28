function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    // eixo x
    var p1 = Math.floor(Math.random() * 500); 
    // eixo y
    var p2 = Math.floor(Math.random() * 400); 
    //atribur nova cor a bola
    var cor = Math.floor(Math.random() * 909099);
    //localização da bola
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+ cor +";");   
    // ação de clicar na bola 
    bola.setAttribute("onclick", "estourar(this)"); 
    //colocar na tela
    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p = p + 1;
    document.getElementById("pontos").innerHTML = p;
    if (p > 50){
        alert ("uhuuu Ganhou");
        window.location.href=window.location.href;
    }
}
function iniciar(){
    setInterval(addBola, 1000);
}