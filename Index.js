// Vari�veis para armazenar o nome do her�i e sua experi�ncia (XP)
let nome = "Artemis";
let xp = 29500;

// Vari�vel para armazenar o n�vel do her�i
let nivel;

// Estrutura de decis�o para classificar o n�vel do her�i com base na XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "N�vel desconhecido"; // Caso XP seja inv�lida
}

// Sa�da da mensagem com o n�vel do her�i
console.log(`O Her�i de nome ${nome} est� no n�vel de ${nivel}`);
