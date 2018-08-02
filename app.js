document.getElementById('txtBtn').addEventListener('click', cargarTXT);

// Cargar Archivo TXT
function cargarTXT() {
    fetch('dato.txt')
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