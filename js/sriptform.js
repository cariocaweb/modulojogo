function validar(){
    
    var valor = document.getElementById("numero").Value;
    
    //fazendo a verificação
    if(valor.length > 2){
        alert("Você digitou um número que tem mais de 2 algatismos.");
        return false;
    } else{
        alert("true");
        return true;
    }
}