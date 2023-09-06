document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("nacimiento").value;

    // Crear un objeto JSON con la información del formulario
    var registroData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Enviar el objeto JSON al endpoint usando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registroData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Registro exitoso');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar');
    });
});
