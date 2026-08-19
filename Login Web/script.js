const formLogin = document.getElementById('formlogin');
const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');

formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = inputUsuario.value.trim();
    const senha = inputSenha.value.trim();

    if (usuario === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Login realizado com sucesso!');
    }
});