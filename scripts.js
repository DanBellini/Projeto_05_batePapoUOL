let participante = {};

function AddPerson (person){
    person = prompt("Qual o seu nome?")
    participante.name = person

    namePost()
}

AddPerson();

function namePost (){
const requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', participante);

requisicao.catch(tratarFalha)
}

function tratarFalha(erro){
    const statusCode = erro.response.status
    if (statusCode === 400){
        AddPerson();
    }
}

function keepConection(){
    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', participante)
}


setInterval(keepConection,4000);


