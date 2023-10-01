$(document).ready(function(){//Aqui temos a chamada da ação jutamente do o Jquery
    // console.log($('header button'));
    // console.log(document.querySelector('#btn-cancelar'));

    $( 'header button').click(function(){//Evento para descer o formulario
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){//Evento para ocultar o formulario
        $('form').slideUp();
    })

    $('form').on('submit',function(e){//Adicona um evento e uma ação ao botão
        e.preventDefault();
        const enderecoDeNovaimagem = $('#enderecoDeNovaimagemNova').val(); //Preenchendo a variavel para mandar para o DOM
        
        //const novoItem = $('<li></li>');//Original sem efeito ao adiconar a imagem
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDeNovaimagem}" />`).appendTo(novoItem);// recebendo a Imagem do Input, e carregando na Lista
        
        //Criando a estrutura HTML
        //<a> Recebe o endereço na nova imagem
        $(`
            <div class="overlay-img-link"> 
                <a href="${enderecoDeNovaimagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
        </div>`).appendTo(novoItem);// Adiciona o novo Item a Lista

        $(novoItem).appendTo('ul');//Isso adicona uma nova imagem que foi redenrizada no DOM 
        $(novoItem).fadeIn(1000);//Isso adicona uma nova imagem com efeito, e ainda podemos colocar os segundo dento do parentese
        $('#enderecoDeNovaimagemNova').val('');//Limpando o formulario
    })
    
})