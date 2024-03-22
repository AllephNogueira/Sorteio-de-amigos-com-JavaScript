let amigos = [];
let jaSorteados = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    if(amigo.value == ''){
        alert('Digite o nome do amigo!');
        return; // return serve para dizer que se cair aqui devemos para a situação/função
    }
    let lista = document.getElementById('lista-amigos');


    if(confirm(`Deseja adicionar esse nome na lista? ${amigo.value}`)){ 
        if (lista.textContent == ''){ // Se lista estiver em branco vamos adicionar o nome
            lista.textContent = amigo.value;  // Vamos usar essa linha de codigo para verificar se ja esta dentro
            amigos.push(amigo.value);          
        }else{
            if(lista.textContent.includes(amigo.value)){  // Vamos ter que verificar se o nome ja existe na lista.
                alert(`Atenção o nome ${amigo.value}, já existe na lista, adicione um nome diferente!`)
            }else{  // Se ja tiver alguem na lista vamos adicionar os proximos.
                lista.textContent = lista.textContent + ' - ' + amigo.value;
                amigos.push(amigo.value);
            }
        }
    }
    amigo.value = ''; // Limpar o campo apos adicionar o amigo
}


function sortear(){

    if(amigos.length < 4){ // So pode sortear se for maior que 4
        alert('Voce precisa de no minimo 4 participantes.')
        return;
    }
    if(amigos.length % 2 != 0){ // So pode sortear se for com numeros pares.
        alert(`Voce tem o total de ${amigos.length} não podemos sortear se o numero não for par.`);
        return;
    }


    embaralhar(amigos);

    let sorteados = document.getElementById('lista-sorteio');
    

    for(let i = 0; i < amigos.length -1; i++){

        sorteados.innerHTML = sorteados.innerHTML + amigos[i] + ' -- > ' + amigos[i +1] + '<br>';


        

    }

}

function embaralhar(lista){
    for (let indice = lista.length; indice; indice--){

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuiçao via destructuring
        [lista[indice -1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }   
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
}