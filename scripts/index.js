function validarEmails(email) {
    if (email.includes('@yahoo.com') || email.includes('@gmail.com') || email.includes('@hotmail.com')) {
        alert('La dirección de correo no puede contener los siguientes dominios: @yahoo.com, @gmail.com, @hotmail.com')
    }
}

function tomarDatosDeRegistro() {
    let name = document.getElementById('nameInput').value
    let email = document.getElementById('emailInput').value
    let emoji = document.getElementById('badFace').style.display = 'none'
    let emojiSmile = document.getElementById('smileyFace').style.display = 'inline'
    validarEmails(email)
    console.log(name, email)
}