/*
Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat

Requisitos:
Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
El resultado debe ser mostrado en la pantalla.

Extras:
Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
*/
const iTexto = document.getElementById("iTexto"); 
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const fMensaje = document.getElementById("fMensaje");
const muñeco = document.getElementById("muñeco");
const tInfo = document.getElementById("tInfo");
const right = document.getElementById("right");


let reemplazar = [
    ["e", "enter"],
    ["i","imes"],
    ["a", "ai"],
    ["o","ober"],
    ["u","ufat"],
]

const remplace = (nuevoTexto) => {
    fMensaje.innerHTML = nuevoTexto; 
    muñeco.classList.add("no_mostrar"); 
    
    iTexto.value ="";
    
    tInfo.style.display = "none";
    btnCopiar.style.display = "block"; 
    right.classList.add("confirmado");
    fMensaje.classList.add("confirmado");

}
const agrupar = () => {
    fMensaje.innerHTML = "";
    muñeco.classList.remove ("no_mostrar");
    tInfo.style.display = "block";
    btnCopiar.style.display = "none"; 
    right.classList.remove("confirmado");
    fMensaje.classList.remove("confirmado");
    iTexto.focus();
}    

// BOTON ENCRIPTAR
btnEncriptar.addEventListener("click", () => {
    const texto = iTexto.value.toLowerCase();
    if (texto !="") {
        function encriptar(nuevoTexto) {
            for(let i = 0; i < reemplazar.length; i++) {
                if (nuevoTexto.includes(reemplazar[i][0])) {
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return nuevoTexto;
        };
    } else {
        alert("Ingresar texto a Encriptar")
        agrupar();
    }
    remplace(encriptar(texto));
});

//BOTON DESENCRIPTAR
btnDesencriptar.addEventListener("click", () => {
    const texto = iTexto.value.toLowerCase();
    if (texto != "") {
        function desencriptar(nuevoTexto) {
            for (let i = 0; i < reemplazar.length; i++) {
                  if (nuevoTexto.includes(reemplazar[i][1])) {
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
            return nuevoTexto;
        };
    }else{
        alert("Ingresar Texto a Desencriptar");
        agrupar();
    }    
    remplace(desencriptar(texto))
});

//BOTON COPIAR
btnCopiar.addEventListener("click", () => {
    let texto = fMensaje;
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");
    agrupar();
})


