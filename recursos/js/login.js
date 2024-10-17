document.addEventListener('DOMContentLoaded', () =>{
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password')

    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')

    emailInput.addEventListener('keyup', validateEmail)
    passwordInput.addEventListener('keyup', validatePassword)
    
    function validateEmail(){
        const value = emailInput.value
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            emailError.textContent = 'Por favor, introduce un correo válido.';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    function validatePassword() {
        const passwordInput = document.getElementById('password'); // Asegúrate de tener el input de contraseña con este ID
        const passwordError = document.getElementById('passwordError'); // Asegúrate de tener un elemento para el mensaje de error con este ID
    
        if (!passwordInput || !passwordError) {
            console.error('Elementos no encontrados en el DOM.');
            return;
        }
        const value = passwordInput.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    
        if (!passwordPattern.test(value)) {
            passwordError.textContent = 'La contraseña debe incluir mayúsculas, minúsculas, números y símbolos, y tener al menos 8 caracteres.';
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }

    document.getElementById('btnMostar').addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el botón actúe como un envío de formulario
        
        const passwordInput = document.getElementById('password');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.textContent = 'Ocultar';  // Cambiar el texto del botón
        } else {
            passwordInput.type = 'password';
            this.textContent = 'Mostrar';  // Cambiar el texto del botón
        }
    })

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();

        // Check if there are no error messages before submission
        if (emailError.textContent && passwordError.textContent) {
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            alert('Registro exitoso!');
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
        }
    });
})