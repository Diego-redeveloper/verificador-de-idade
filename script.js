function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) { // se ele não colocou nada ou foi pro futuro
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 10) {
                // bebe
                img.setAttribute('src', 'bebe m.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem m.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10) {
                // bebe
                img.setAttribute('src', 'bebe f.jpg')
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'jovem f.jpg')
            } else {
                // idosa
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}