function consultaEnd(){
    let cep = document.querySelector('#cep').value

    if(cep.length != 8){
        alert("CEP inválido!")
    }

    let url = `https://viacep.com.br/ws/` + cep + `/json/`

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEnd(data)
        })
    })
}

function mostrarEnd(dados){
    let resultado = document.querySelector('#resultado')

    if(dados.erro){
        resultado.innerHTML = '<p>Não foi possível localizar o endereço!</p>'
    } else{
        resultado.innerHTML = 
        `
        <p>Endereço: ${dados.logradouro}</p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade}</p>
        `
    }
}