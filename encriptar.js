function encriptar(){
    var textoObtenido = document.getElementById("textoObtenido").value;
    var cadena = "";

    for(let i = 0; i < textoObtenido.length; i++){
        if(textoObtenido[i] == "e"){
            cadena = cadena + "enter";
            continue;
        }
    
        if(textoObtenido[i] == "i"){
            cadena = cadena + "imes";
            continue;
        }
    
        if(textoObtenido[i] == "a"){
            cadena = cadena + "ai";
            continue;
        }
    
        if(textoObtenido[i] == "o"){
            cadena = cadena + "ober";
            continue;
        }
    
        if(textoObtenido[i] == "u"){
            cadena = cadena + "ufat";
            continue;
        }
    
        cadena = cadena + textoObtenido[i];
    }
    
    document.getElementById("textoResultado").innerText = cadena;
}


function desencriptar(){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    var textoObtenido = document.getElementById("textoObtenido").value;

    for( let i = 0; i < matrizcodigo.length; i++){
        if(textoObtenido.includes(matrizcodigo[i][1])){
            textoObtenido=textoObtenido.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
        }
    }

    document.getElementById("textoResultado").innerText = textoObtenido;
}


function copiarTexto(){
    let textoacopiar = document.querySelector("#textoResultado");
    textoacopiar.select();
    document.execCommand("copy");

    document.getElementById("textoResultado").innerText = "";
    document.getElementById("textoObtenido").focus();
}