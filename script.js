document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    var password = document.getElementById("password").value;

    // Verifica se a senha está correta
    if (password === "1") {
        // Redireciona para a página protegida
        window.location.href = "cartaz.html";
    } else {
        // Exibe mensagem de erro
        document.getElementById("errorMessage").innerText = "Senha incorreta. Tente novamente.";
    }
});
