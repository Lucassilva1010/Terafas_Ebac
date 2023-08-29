const form = document.getElementById('form-deposito');
const nomePessoa = document.getElementById('nomeBeneficiario');// busca o ID para aplicar o evento
let formularioEValido = false;//Variavel para alocar a função

// criando função para validações
function validaNomes(nomeCompleto) {
    const nomePessoaArray = nomeCompleto.split(' ');
    return nomePessoaArray.length >2;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();//cancela o retorno de eventos automaticos da pagina

    const conta = document.getElementById('numeroConta');
    const valorDeposito = document.getElementById('valorDeposito');//aqui chama os IDs
    const descricao = document.getElementById('descricaoDeposito');

    const mensagem = `Foi depositado um valor de: <b>${valorDeposito.value}</b>, 
    na conta: <b>${conta.value}</b> do cliente: <b>${nomePessoa.value}</b>`

    formularioEValido = validaNomes(nomePessoa.value); // Passando valor para variavel
    if (formularioEValido) {
        const containerMensagem = document.querySelector('.success-mensage');//isso chama o HTML
        containerMensagem.innerHTML = mensagem; //Isso vai chamar o HTML
        containerMensagem.style.display = 'block';

        //Essa açõa via limpar os fomularios após o preenchimento
        nomePessoa.value = '';
        conta.value = '';
        valorDeposito.value = '';
        descricao.value = '';

    } else {
        nomePessoa.style.border = '1px solid red';//isso faz a borda ficar vermelha
        document.querySelector('.erro-nome').style.display = 'block';//isso chama o HTML da nova classe

    }

})

//Validação para o formulario de nome
nomePessoa.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formularioEValido = validaNomes(e.target.value); // Passando valor para variavel
    
    if (!formularioEValido) {
        nomePessoa.classList.add('error');//Vai chamar do css
        // nomePessoa.style.border = '1px solid red';//isso faz a borda ficar vermelha
        document.querySelector('.erro-nome').style.display = 'block';//isso chama o HTML da nova classe
        
    }else{
        
        nomePessoa.classList.remove('error');//Vai chamar do css
        document.querySelector('.erro-nome').style.display = 'none';//isso faz com que o HTML não apareça mais
    }
    
});
