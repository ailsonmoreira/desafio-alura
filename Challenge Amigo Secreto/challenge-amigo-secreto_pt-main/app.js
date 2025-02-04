let listaAmigos = [];
let listaUl = document.getElementById('listaAmigos');
let resultadoSorteio = document.getElementById('resultado');

//Função para adicionar amigos na lista.
function adicionarAmigo(){

    let nomeAmigo = document.getElementById('amigo').value;

    if(nomeAmigo == ''){
        alert('Insira um nome válido');
    } else if
        (listaAmigos.includes(nomeAmigo)) {
        alert('Amigo já adicionado. Escreva outro nome');
        }else{
            listaAmigos.push(nomeAmigo);

            let novoLi = document.createElement('li');
            novoLi.textContent = nomeAmigo;
            listaUl.appendChild(novoLi);
            resultadoSorteio.style.display = 'none';
            listaUl.style.display = 'block';

            clearField();
        }
}

//Transforma a primeira letra do nome em maiúscula
document.getElementById('amigo').addEventListener('input', function() {
    let nome = this.value;
    if (nome.length > 0) {
        this.value = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    }
});

//Aciona o input ao pressionar enter
document.getElementById('amigo').addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        adicionarAmigo();
    }
})

function sortearAmigo(){
    //Verifica se existem nomes na lista
    if(listaAmigos < 2){
        alert('Insira pelo menos 2 nomes na lista')
    } else {
        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);

        let amigoSorteado = listaAmigos[indiceSorteado];
        let resultadoLi = document.createElement('li')
        resultadoLi.textContent = ('O amigo sorteado é: ' + amigoSorteado);
        resultadoSorteio.appendChild(resultadoLi);
    
        listaUl.style.display = 'none';
        resultadoSorteio.style.display = 'block'
    
        console.log(amigoSorteado);
    }
}

function clearField() {
    document.getElementById('amigo').value = '';

}