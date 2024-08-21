//data final da contagem
//logo darei um jeito para que o usuario defina esta data
const dataFinal = new Date('December 13, 2024 00:00:00').getTime();
console.log(dataFinal)
//Agora é preciso criar uma função para atualizar a contagem

function atualizaContagem(){
    //pega a data atual
    const agora = new Date().getTime();
    //calcula a diferença com a data final
    const diferenca = dataFinal - agora;
    console.log(diferenca);

    //agora converteremos o resultado para dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    console.log(dias + ' , ' +horas+ ' , '+minutos+' , '+ segundos);

    //imprime no HTML as atualizações
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    //finaliza a contagem e imprime uma mensagem informando
    if(diferenca < 0){
        clearInterval(intervalo);
        document.getElementById('msg').innerText = 'A contagem chegou ao Fim!';
    }


}

//inicia e atualiza o intervalo
const intervalo = setInterval(atualizaContagem, 1000);


