// FUNCIÓN ENCRIPTAR
function encriptar() {
    var texto = document.getElementById("text").value.toLowerCase();

    texto = texto.replace(/o/igm, "ober");
    texto = texto.replace(/i/igm, "imes");
    texto = texto.replace(/a/igm, "ai");
    texto = texto.replace(/u/igm, "ufat");
    texto = texto.replace(/e/igm, "enter");

    actualizarInterfaz(texto);
}

// FUNCIÓN DESENCRIPTAR
function desencriptar() {
    var texto = document.getElementById("text").value.toLowerCase();

    texto = texto.replace(/enter/igm, "e");
    texto = texto.replace(/ober/igm, "o");
    texto = texto.replace(/imes/igm, "i");
    texto = texto.replace(/ai/igm, "a");
    texto = texto.replace(/ufat/igm, "u");

    actualizarInterfaz(texto);
}

// FUNCIÓN PARA ACTUALIZAR LA INTERFAZ
function actualizarInterfaz(textoCifrado) {
    document.getElementById("img-candado").style.display = "none";
    document.getElementById("mensaje-1").style.display = "none";
    document.getElementById("mensaje-2").style.display = "none";
    document.getElementById("text-result").innerHTML = textoCifrado;
    document.getElementById("text").value = "";
    document.getElementById("btn-copy").style.visibility = "visible";
    document.getElementById("btn-copy").style.display = "inherit";
}

// FUNCIÓN COPIAR
const btnCopy = document.querySelector("#btn-copy");

btnCopy.addEventListener("click", () => {
    const resultText = document.querySelector("#text-result").textContent;
    navigator.clipboard.writeText(resultText);
    alert("¡Se copió correctamente!");
});

    
