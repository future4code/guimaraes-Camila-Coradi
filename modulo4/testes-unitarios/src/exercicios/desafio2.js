const minhaFrase = "eu sou o bob, aluno da labenu";
const palavras = minhaFrase.split(" ");

palavras.map((palavra) => { 
    return palavra[0].toUpperCase() + palavra.substring(1); 
}).join(" ");