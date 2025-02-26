function logar() {
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value.trim();

    if (email === "admin" && senha === "admin") {
        alert('Login bem-sucedido!');
        window.location.assign("index.html");
    } else {
        alert('Email ou Senha Incorretos!');
    }
}
