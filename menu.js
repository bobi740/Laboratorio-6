const formulario = document.querySelector("#formulario1");

formulario.addEventListener("submit", anexar)

function anexar(e){
    e.preventDefault();
    const valm = document.querySelector("#menu").value
    const pag1 = document.querySelector("#pag1").value

    const answer = document.getElementById("answer");
    if((email && password) == false){
        answer.textContent = "Ingresa un correo y una contraseña valida."
    }
    if(email == false){
        answer.textContent = "Ingresa un correo valido."
    }
    if(password == false){
        answer.textContent = "Ingresa una contraseña valida."
    }
    else{
        answer.textContent = `Tu correo es ${email} y tu contraseña es ${password}.`
    }
    
}