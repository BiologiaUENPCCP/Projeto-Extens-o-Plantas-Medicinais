document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            alert(Obrigado pela sua mensagem, ${name}!);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
