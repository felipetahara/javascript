function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO!] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'babyboy.png')
            } else if (idade < 13) {
                //Criança
                img.setAttribute('src', 'boy.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'teenboy.png')
            } else if (idade < 30) {
                //Jovem adulto
                img.setAttribute('src', 'youngman.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'man.png')
            } else {
                //Idoso
                img.setAttribute('src', 'oldman.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'babygirl.png')
            } else if (idade < 13) {
                //Criança
                img.setAttribute('src', 'girl.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'teengirl.png')
            } else if (idade < 30) {
                //Jovem adulto
                img.setAttribute('src', 'youngwoman.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'woman.png')
            } else {
                //Idoso
                img.setAttribute('src', 'oldlady.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é <strong>${gênero}</strong> com <strong>${idade} anos</strong>.`
        res.appendChild(img)
    }

}