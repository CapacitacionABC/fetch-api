document.getElementById('txtBtn').addEventListener('click', cargarTXT);

document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

// Cargar Archivo TXT
function cargarTXT() {
    fetch('datos.txt')
        .then(function(res) {
            return res.text(); // Permite conectarse y traerse la información
        })
        .then(function(data) {
            console.log(data); // Posee los datos
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(error) {
            console.log(error);
        })
}

// Cargar Archivo JSON
function cargarJSON() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let html = '';
            data.forEach(function(empleado) {
                html += `
                    <li>${empleado.nombre} ${empleado.empresa}</li>
                `;
            })

            console.log(html);

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
}