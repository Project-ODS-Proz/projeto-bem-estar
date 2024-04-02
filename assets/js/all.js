const form = document.getElementById('form');

form.addEventListener('submit', function (event) { //event -> criaçao do evento
    event.preventDefault();

    /*capitura dos valores do peso e da altura*/
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    /*função do imc*/
    const imc = (peso / (altura * altura)).toFixed(2); //toFixed -> aparecer duas casas depois da ','

    /*captura do value*/
    const valor = document.getElementById('valor');

    let descricao = '';

    /*remoçao da classe hidden*/

    document.getElementById('infos').classList.remove('hidden');

    /*criação das condicionas*/

    if (imc < 18.5) {
        descricao = 'ALERTA!! Abaixo do peso!'
    } else if (imc >= 18.5 && imc <= 25) {
        descricao = 'PARABÉNS!! Peso ideal!'
    } else if (imc > 25 && imc <= 30) {
        descricao = 'ATENÇÃO!! Sobrepeso!'
    } else if (imc > 30 && imc <= 35) {
        descricao = 'ATENÇÃO!! Obesidade Moderada!'
    } else if (imc > 35 && imc <= 40) {
        descricao = 'CUIDADO!! Obesidade Severa!'
    } else {
        descricao = 'CUIDADO!! Obesidade Morbida!'
    }


    /*Visualização do resultado*/
    valor.textContent = imc.replace('.', ', '); //o replace vai trocar o '.' pela ','
    document.getElementById('descricao').textContent = descricao;

});