let vitorias = 90;
let derrotas = 40;

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function determinarNivel(saldo) {
    let nivel = "";
    if (saldo <= 10) {
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lend�rio";
    } else if (saldo > 100) {
        nivel = "Imortal";
    }
    return nivel;
}

// Calculando o saldo
let saldo = calcularSaldo(vitorias, derrotas);
// Determinando o n�vel baseado no saldo
let nivel = determinarNivel(saldo);

console.log(`O Her�i tem um saldo de ${saldo} e est� no n�vel ${nivel}.`);


