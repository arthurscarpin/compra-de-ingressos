let valorPista = parseInt(document.getElementById('qtd-pista').textContent);
let valorSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let valorInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    switch (tipoIngresso) {
        case 'pista':
            let quantidadePista = document.getElementById('qtd-pista');
            if (quantidade > valorPista) {
                alert('Quantidade indisponível para pista!');
                document.getElementById('qtd').value = '';
                return;
            }
            valorPista = valorPista - quantidade;
            quantidadePista.textContent = valorPista;
            break;
        case 'superior':
            let quantidadeSuperior = document.getElementById('qtd-superior');
            if (quantidade > valorSuperior) {
                alert('Quantidade indisponível para pista!');
                document.getElementById('qtd').value = '';
                return;
            }
            valorSuperior = valorSuperior - quantidade;
            quantidadeSuperior.textContent = valorSuperior
            break;
        case 'inferior':
            let quantidadeInferior = document.getElementById('qtd-inferior');
            if (quantidade > valorInferior) {
                alert('Quantidade indisponível para pista!');
                document.getElementById('qtd').value = '';
                return;
            }
            valorInferior = valorInferior - quantidade;
            quantidadeInferior.textContent = valorInferior;
            break;
    }
    document.getElementById('qtd').value = '';
}