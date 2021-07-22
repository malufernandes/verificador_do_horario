function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
           gênero = 'Homem'
           if(idade >= 0 && idade < 10){
               //criança
               img.setAttribute ('src', 'menino.png')
           }else if(idade < 25){
               //jovem
               img.setAttribute('src','jovem h..png')
           }else if(idade < 55){
               //adulto
               img.setAttribute('src', 'adulto.png')
           }else{
               //idoso
               img.setAttribute('src', 'idoso.png')
           }
       }else if(fsex[1].checked){
           gênero = 'Mulher'
           if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'menina.png')
        }else if(idade < 25){
            //jovem
            img.setAttribute('src', 'jovem m..png')
        }else if(idade < 55){
            //adulto
            img.setAttribute('src', 'adulta.png')
        }else{
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `<p>Detectamos ${gênero}, com ${idade} anos.</p>`
       res.appendChild(img)
       
    }
}