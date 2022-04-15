let menssagensdoChat = [];
let addmessage = document.querySelector(".chat");

function pushmenssages (){
const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

promise.then(carregarMensagens);
promise.catch(tratarErro);
}

function tratarErro(erro) {
    console.log(erro.response);
}

function carregarMensagens(resposta){
    menssagensdoChat = resposta.data;
    renderMenssage()
}

function renderMenssage(){
    let addmessage = document.querySelector(".chat");
    addmessage.innerHTML = "";


    for(i=0;i<menssagensdoChat.length;i++){
        if (menssagensdoChat[i].type === "status"){
            addmessage.innerHTML += `
            <div class="system">
            <p><u> ${menssagensdoChat[i].time} </u><strong>${menssagensdoChat[i].from} </strong>${menssagensdoChat[i].text}</p>
            </div>`
        }
        if (menssagensdoChat[i].type === "message"){
            addmessage.innerHTML += `
            <div class="normal">
            <p><u> ${menssagensdoChat[i].time} </u><strong>${menssagensdoChat[i].from} </strong>para <strong>${menssagensdoChat[i].to}</strong>: ${menssagensdoChat[i].text}</p>
            </div>`
        }
        if(menssagensdoChat[i].type === "private_message"){
            addmessage.innerHTML += `
            <div class="reserved">
            <p><u> ${menssagensdoChat[i].time} </u><strong>${menssagensdoChat[i].from} </strong>para <strong>${menssagensdoChat[i].to}</strong>: ${menssagensdoChat[i].text}</p>
            </div>`
        } 
    }
    addmessage.scrollIntoView(false);
}

pushmenssages()
setInterval(pushmenssages, 3000)



