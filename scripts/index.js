function validarEmails(email) {
    try{
        let valida2 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
    
        if(valida2 == false){
            throw 'Email no valido'
        }

        if (email.includes('@yahoo.com') || email.includes('@gmail.com') || email.includes('@hotmail.com')) {
            throw 'La dirección de correo no puede contener los siguientes dominios: @yahoo.com, @gmail.com, @hotmail.com'
        }

        // Cambiar la carita
        document.getElementById('badFace').style.display = 'none'
        document.getElementById('smileyFace').style.display = 'inline'
        return 1;
    }catch(e){
        alert(e);
        document.getElementById('badFace').style.display = 'inline'
        document.getElementById('smileyFace').style.display = 'none'
        return 0;
    }
}

function validarNombre(nombre){
    if(nombre.trim().length <= 0){
        alert('El nombre no puede ir vacio')
        return 0;
    }
    return 1;
}

function tomarDatosDeRegistro() {
    let name = document.getElementById('nameInput').value
    let email = document.getElementById('emailInput').value

    let valida_email = validarEmails(email)
    let valida_nombre = validarNombre(name)

    if( valida_email == valida_nombre == 1){
        enviarDatosRegistro(email, name);
    }
    

    console.log(name, email)
}

function enviarDatosRegistro(email, name){
    let objeto = {
        'email': email,
        'name': name,
        'usuario': 'prueba',
        'pass': '123pas'
    }
    // Agregar el fetch del api
    



}