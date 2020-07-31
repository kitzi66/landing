function validarEmails(email) {
    if (email.includes('@yahoo.com') || email.includes('@gmail.com') || email.includes('@hotmail.com')) {
        alert('La dirección de correo no puede contener los siguientes dominios: @yahoo.com, @gmail.com, @hotmail.com')
    }
}