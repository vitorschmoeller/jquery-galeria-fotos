$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val()
        console.log(endereçoDaNovaImagem)
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(5000)
        $('#endereço-imagem-nova').val('')
    })
})