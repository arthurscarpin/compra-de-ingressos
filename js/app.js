let valorPista = parseInt(document.getElementById('qtd-pista').textContent);
let valorSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let valorInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    if (quantidade <= 0) {
        alert('A quantidade é inválida!');
        document.getElementById('qtd').value = '';
        return;
    }

    switch (tipoIngresso) {
        case 'pista':
            comprarPista(quantidade);
            break;
        case 'superior':
            comprarSuperior(quantidade);
            break;
        case 'inferior':
            comprarInferior(quantidade);
            break;
    }
    document.getElementById('qtd').value = '';
}

function comprarPista(quantidade) {
    let quantidadePista = document.getElementById('qtd-pista');
    if (quantidade > valorPista) {
        alert('Quantidade indisponível para pista!');
        document.getElementById('qtd').value = '';
        return;
    }
    valorPista = valorPista - quantidade;
    quantidadePista.textContent = valorPista;
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = document.getElementById('qtd-superior');
    if (quantidade > valorSuperior) {
        alert('Quantidade indisponível para pista!');
        document.getElementById('qtd').value = '';
        return;
    }
    valorSuperior = valorSuperior - quantidade;
    quantidadeSuperior.textContent = valorSuperior;
}

function comprarInferior(quantidade) {
    let quantidadeInferior = document.getElementById('qtd-inferior');
    if (quantidade > valorInferior) {
        alert('Quantidade indisponível para pista!');
        document.getElementById('qtd').value = '';
        return;
    }
    valorInferior = valorInferior - quantidade;
    quantidadeInferior.textContent = valorInferior;
}