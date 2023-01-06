function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = data.getDay()
    msg.innerHTML = `Agora são ${hora}h e ${min}min.`
    if (hora >=0 && hora < 12) {

        img.src = 'manhaa.png'
        document.body.style.background = '#FEE67A'
    
    

    } else if (hora >= 12 && hora < 18) {

        img.src = 'tardee.png'
        document.body.style.background = '#FF9B43'

    } else {

        img.src = 'noitee.png'
        document.body.style.background = '#052C55'

    }

    

}