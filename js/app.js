let valorPista = 100;
let valorSuperior = 200;
let valorInferior = 400;

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    switch (tipoIngresso) {
        case 'pista':
            let quantidadePista = document.getElementById('qtd-pista');
            if (quantidade > valorPista) {
                alert('Quantidade indisponível para pista!');
                return;
            }
            valorPista = valorPista - quantidade;
            quantidadePista.textContent = valorPista;
            break;
        case 'superior':
            let quantidadeSuperior = document.getElementById('qtd-superior');
            if (quantidade > valorSuperior) {
                alert('Quantidade indisponível para pista!');
                return;
            }
            valorSuperior = valorSuperior - quantidade;
            quantidadeSuperior.textContent = valorSuperior
            break;
        case 'inferior':
            let quantidadeInferior = document.getElementById('qtd-inferior');
            valorInferior = valorInferior - quantidade;
            if (quantidade > valorInferior) {
                alert('Quantidade indisponível para pista!');
                return;
            }
            quantidadeInferior.textContent = valorInferior;
            break;
    }
}