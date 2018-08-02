document.getElementById('txtBtn').addEventListener('click', cargarTXT);

document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

document.getElementById('apiBtn').addEventListener('click', cargarAPI);

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

// Cargar Archivo API
function cargarAPI() {
    fetch('https://picsum.photos/list')
        .then(function(res) {
            return res.json();
        })
        .then(function(imagenes) {
            let html = '';
            imagenes.forEach(function(imagen) {
                html += `
                    <li>
                        <a target="_blank" href="${imagen.post_url}"> Ver Imagen</a>
                        ${imagen.author}
                    </li>
                `;
            })

            console.log(html);

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
}