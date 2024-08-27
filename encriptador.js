 
 const d = document;
 const textArea = d.querySelector(".form__input");
 const imagenMuñeco = d.querySelector(".result__img");
 const loaderWitch= d.querySelector(".loader");
 const resultTitle= d.querySelector(".result__title");
 const resulText = d.querySelector(".result__text");
 const Botonencriptar= d.querySelector(".form__btn");
 const Botondesencriptar= d.querySelectorAll(".form__btn");
 const BotonCopiar=d.querySelector(".result__btn");

 const llaves=[
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"], 
    ["u", "ufat"]
];

function encriptarmensaje(){}

//Funcion para encriptar un mensaje
function ecriptarmensaje(mensaje){
    let mensajeEncriptado="";
    for(let i = 0; i < mensaje.length; i++){
        let letra= mensaje[i];
        let encriptada= letra;
        for(let j =0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                // Esto reemplaza la letra por su equivalente encriptado
                encriptada = llaves[j][1] 
                break;
            }
        } 
        mensajeEncriptado += encriptada; 
    } 
    return mensajeEncriptado;
}

//Funcion para desencriptar un mensaje
function desencriptarmensaje(mensaje){
        let mensajeDesencriptado = mensaje;
        for(let i = 0; i < llaves.length; i++){
            let regex= new RegExp(llaves[i][1], 'g')
            mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);   
     }
     return mensajeDesencriptado;
}

//Ocultar elementos dinámicamente
textArea.addEventListener("input",(e)=>{
    imagenMuñeco.style.display = "none";
    loaderWitch.classList.remove("hidden");
    resultTitle.textContent = "Recibiendo Mensaje";
    resulText.textContent = "";
})
//Función del botón encriptar
Botonencriptar.addEventListener("click",(e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = ecriptarmensaje(mensaje);
    resulText.textContent = mensajeEncriptado;
    BotonCopiar.classList.remove("hidden");
    resultTitle.textContent = "EL RESULTADO ES: ";
}); 

Botondesencriptar[1].addEventListener("click",(e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarmensaje(mensaje);
    resulText.textContent = mensajeDesencriptado;
    resultTitle.textContent = "EL RESULTADO ES: ";
    BotonCopiar.classList.remove("hidden");
});

BotonCopiar.addEventListener('click', () => {
    let textoCopiado = resulText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuñeco.style.display = "block";
        loaderWitch.classList.add("hidden");
        resultTitle.textContent = "El TEXTO FUE COPIADO";
        BotonCopiar.classList.add("hidden");
        resulText.textContent = "";
    })
})