// Función para manejar el registro
function handleRegister(event) {
    event.preventDefault();

    // Obtener los datos del formulario de registro
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Guardar los datos en el localStorage
    localStorage.setItem("first-name", firstName);
    localStorage.setItem("last-name", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Redirigir a la página de inicio de sesión
    window.location.href = "login.html"; 
}

// Función para manejar el inicio de sesión
function handleLogin(event) {
    event.preventDefault();

    // Obtener los datos del formulario de inicio de sesión
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Recuperar los datos del localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Verificar las credenciales
    if (email === storedEmail && password === storedPassword) {
        // Guardar que el usuario está logueado
        localStorage.setItem("loggedIn", "true");

        // Redirigir a la página principal (index.html)
        window.location.href = "index.html"; 
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}

// Función para manejar el cierre de sesión
function handleLogout() {
    // Eliminar los datos de sesión
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("first-name");
    localStorage.removeItem("last-name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    // Redirigir a la página de inicio de sesión
    window.location.href = "login.html"; 
}

// Función que se ejecuta al cargar la página
window.onload = function() {
    const loggedIn = localStorage.getItem("loggedIn");

    // Si estamos en la página principal (index.html)
    if (window.location.href.includes("index.html")) {
        // Si el usuario está logueado, mostrar su nombre y habilitar cerrar sesión
        if (loggedIn) {
            const firstName = localStorage.getItem("first-name");
            document.getElementById("username-display").textContent = `Bienvenido, ${firstName}`;
            document.getElementById("login-link").style.display = "none"; // Ocultar el enlace de login
            document.getElementById("logout-btn").style.display = "inline-block"; // Mostrar el botón de logout

            // Agregar el manejador de eventos para cerrar sesión
            document.getElementById("logout-btn").addEventListener("click", handleLogout);
        } else {
            // Si no está logueado, mostrar el enlace de login
            document.getElementById("login-link").style.display = "inline-block";
            document.getElementById("logout-btn").style.display = "none"; // Ocultar el botón de logout
        }
    }

    // Asignar los manejadores de eventos a los formularios
    if (document.getElementById("registration-form")) {
        document.getElementById("registration-form").addEventListener("submit", handleRegister);
    }

    if (document.getElementById("login-form")) {
        document.getElementById("login-form").addEventListener("submit", handleLogin);
    }
};
