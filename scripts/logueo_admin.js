
function validarAdmin(){
    let user = document.getElementById('usuario').value
    let pass = document.getElementById('pass').value

    fetch('datos_prueba/usuarios_admin.json').then(response => {
        return response.json()
    }).then(json => {
        console.log(json)
        if(user == json.usuario && pass == json.password){
            window.location = './lista_registros.html';
        }else{
            throw 'Usuario no valido'
        }
    }).catch(e=>{
        alert(e)
    })
}