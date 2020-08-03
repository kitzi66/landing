
function leeDatos(){
    document.getElementById('detalle-listado').empty;
    fetch('/datos_prueba/usuarios_registrados.json').then(response => {
        return response.json();
    }).then(usuarios=>{
        console.log(usuarios);
        let html = document.getElementById('detalle-listado').innerHTML;
        for(let i  in usuarios.Usuarios){
            console.log(usuarios.Usuarios[i]);
            html += "<div class='detalle'>" +
            "<div>" + usuarios.Usuarios[i].id + "</div>" +
            "<div>" + usuarios.Usuarios[i].nombre + "</div>" +
            "<div>" + usuarios.Usuarios[i].email + "</div>" +
            "</div>"
            
        }
        document.getElementById('detalle-listado').innerHTML = html;
    })
}

leeDatos();