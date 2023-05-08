function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoDaEtiqueta = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    document.getElementById("mensagem").innerHTML = 'Opa! Você ganhou um desconto de 10%, você pagará R$ ' + (aplicarDesconto(precoDaEtiqueta, 10));
}

else if (formaDePagamento === 2) {
    document.getElementById("mensagem").innerHTML = 'Opa! Você ganhou um desconto de 15%, você pagará R$ ' + (aplicarDesconto(precoDaEtiqueta, 15));
}

else if (formaDePagamento === 3) {
    document.getElementById("mensagem").innerHTML = 'Você pagará este produto em duas parcelas iguais e sem juros de R$ ' + (precoDaEtiqueta / 2);
}

else if (formaDePagamento === 4) {
    document.getElementById("mensagem").innerHTML = 'Você pagará este produto com juros de 10%, e ficará em três parcelas de R$  ' + (aplicarJuros(precoDaEtiqueta, 10) / (3));
}

