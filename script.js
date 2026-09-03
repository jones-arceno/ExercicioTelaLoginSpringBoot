const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log("Email:", email);
    console.log("Senha:", senha);

    fetch("http://localhost:8080/login", {
    method: "POST",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify ({
email: email,
senha: senha

     })
})

.then(response => response.text())
.then(data => {
    console.log("Resposta do Spring:", data);

    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = data;
});

});